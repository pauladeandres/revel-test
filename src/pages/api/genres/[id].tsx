import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        let authToken = req.headers.cookie
        authToken = authToken?.split('=')
        authToken = authToken[1]

        const id = req.url?.split('/')[3]

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const movies = await fetch(`${process.env.API_BASE_URL}/films/genres/${id}/movies`, requestOptions)
            .then((response) => response.json())
            .then((result) => result)
            .catch((error) => console.error(error));

        return res.status(200).json(movies);
    } catch (error) {

    }
}