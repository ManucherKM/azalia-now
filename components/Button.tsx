import { FC, useState } from "react"
import styles from "../styles/Button.module.scss"
import { IButton } from "../types/types";

const Button: FC<IButton> = ({
    text,
    onClick,
    addStyles = styles.btn_default,
}) => {

    const [customStyles, setCustomStyles] = useState<string>(addStyles);

    function clickHandler() {
        onClick()
    }

    return (
        <button
            className={customStyles}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}

export default Button