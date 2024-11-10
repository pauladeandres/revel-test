import styles from "@/styles/Button.module.css";

type ButtonProps = {
    text: string,
    buttonType: string,
    buttonSize: string,
    onClick: () => Promise<void>
}

export const Button = ( props: ButtonProps ) => {
    return (
        <>
            <button 
                onClick={props.onClick} 
                className={`${styles['revel-cta']} ${styles[props.buttonType]} ${styles[props.buttonSize]} `}
            >
                {props.text}
            </button>
        </>
    )
}