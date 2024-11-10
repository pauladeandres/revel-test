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

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const genres = await fetch(`${process.env.API_BASE_URL}/films/movies`, requestOptions)
            .then((response) => response.json())
            .then((result) => result)
            .catch((error) => console.error(error));
        console.log('Movies', genres)

        res.status(200).json(genres)
    } catch(error) {

    }
}