import { LoginForm } from "@/components/login-form/login-form.component";
import localFont from "next/font/local";

import background  from '../../images/LoginUltraDesktop.png'

const roboto = localFont({
    src: "../../../public/fonts/Roboto-Regular.ttf",
    variable: "--font-roboto",
    weight: "400",
});
const robotoCondensed = localFont({
    src: "../../../public/fonts/RobotoCondensed-Regular.ttf",
    variable: "--font-roboto-condensed",
    weight: "400",
});
const robotoCondensedBold = localFont({
    src: "../../../public/fonts/RobotoCondensed-Bold.ttf",
    variable: "--font-roboto-condensed-bold",
    weight: "700",
});

export default function Login() {
    
    const loginBackgroundStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={loginBackgroundStyle} className={`fullscreen-page ${roboto.variable} ${robotoCondensed.variable} ${robotoCondensedBold.variable}`}>
            <LoginForm></LoginForm>
        </div>
    );
}