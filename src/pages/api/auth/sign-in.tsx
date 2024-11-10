import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(req.body),
            redirect: "follow"
        };
        
        let token = await fetch(`${process.env.API_BASE_URL}/films/auth/sign-in`, requestOptions)
            .then((response) => response.json())
            .then((result) => result.token)
            .catch((error) => console.error(error));
        console.log(token)

            if(token) {
                res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`)
                return res.status(200).json({ message: "Authenticated" });
            } else {
                return res.status(405).json({ message: "Method Not Allowed" });
            }
        } catch (error) {
            console.log(error)
        }
}