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
        console.log('ID PELICULA', id)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const movie = await fetch(`${process.env.API_BASE_URL}/films/movies/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('Resultado', result)
                return result}
            )
            .catch((error) => console.error(error));
        
        console.log(movie)

        return res.status(200).json(movie);
    } catch (error) {

    }
}