import React, { ReactNode, useEffect } from "react";
import { Button } from "../button/button.component";

import localFont from "next/font/local";

import Footer from "@/components/footer/footer.component";
import userIcon from '../../images/account.png'

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

function toggleDropdownMenu() {
    document.querySelector('.dropdown-menu')?.classList.toggle('opened')
}
const LogOut = async ()=> {
    try {
        const response = await fetch('/api/auth/sign-out', {
            method: 'POST',
            credentials: 'include', // Send cookies along with the request
        });

        if (response.ok) {
            // Optionally, redirect the user to the login page or home page
            window.location.href = '/login';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }

}

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children}) => {

    return(
        <>
            <header className={`${roboto.variable} ${robotoCondensed.variable} ${robotoCondensedBold.variable}`}>
                <nav>
                    <div className="account-icon" style={{ backgroundImage: `url(${userIcon.src})` }} onClick={() => toggleDropdownMenu()}></div>
                        <div className="dropdown-menu">
                        <Button text="Sign out" buttonType="purple" buttonSize="medium" onClick={LogOut}></Button>
                        </div>
                </nav>
            </header>
            <main className={`${roboto.variable} ${robotoCondensed.variable} ${robotoCondensedBold.variable}`}> {children} </main>
            <footer className={`${roboto.variable} ${robotoCondensed.variable} ${robotoCondensedBold.variable}`}>
                <Footer></Footer>
            </footer>
            
        </>
    )
}

export default Layout