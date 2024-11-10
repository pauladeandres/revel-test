import { useState } from "react";
import { useRouter } from "next/router";

import styles from '@/styles/Login.module.css'

import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

export const LoginForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = async (event: any): Promise<void> => {
        event.preventDefault()
        console.log('submit',{ email: email, password: password })

        const response = await fetch('/api/auth/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password }),
        })
        console.log(response)
        if (response.ok) {
            router.push("/");
        } else {
             setError("Authentication failed");
        }
    }

    return (
        <>
            <form className={`${styles['login-form']}`}>
                <FormInput type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}></FormInput>
                <FormInput type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></FormInput>
                <Button text='Sign In' buttonType='purple' buttonSize='fullwidth' onClick={handleSubmit}></Button>
                <div className="form-error">
                    {error && <p>{error}</p>}
                </div>
            </form>
        </>
    )
}