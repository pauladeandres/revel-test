import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

export const verifyAuthToken = (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies.auth_token;

    // Si no hay token, redirigir al login
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    try {
        // Verificar el token (usando JWT)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Asegúrate de tener la clave secreta
        return {
            props: {
                isAuthenticated: true,
                user: decoded,  // Información decodificada del token
            },
        };
    } catch (error) {
        // Si el token no es válido o expiró, redirigir al login
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
};