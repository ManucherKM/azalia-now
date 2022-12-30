import { FC, useEffect, useState } from "react"
import styles from "../styles/ButtonFavorites.module.scss"
import { IButtonFavorites } from "../types/types";

const ButtonFavorites: FC<IButtonFavorites> = ({ onClick, isFavorites = false, }) => {

    const [customStyles, setCustomStyles] = useState<string>(isFavorites
        ? styles.favorites_active
        : styles.favorites
    );

    function clickHandler() {
        onClick()
    }

    useEffect(() => {
        setCustomStyles(isFavorites
            ? styles.favorites_active
            : styles.favorites
        );
    }, [isFavorites])


    return (
        <svg
            className={customStyles}
            onClick={clickHandler}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="19.5" stroke="#F5F5F7" />
            <path d="M20 18C20 15.7909 18.2091 14 16 14C13.7909 14 12 15.7909 12 18C12 22 18 26 20 28" stroke="#999999" strokeLinecap="round" />
            <path d="M20.2769 24C21.3119 23.1153 22.4675 22.0969 23.4677 21" stroke="#999999" />
            <path d="M19.6464 27.6464C19.4512 27.8417 19.4512 28.1583 19.6464 28.3536C19.8417 28.5488 20.1583 28.5488 20.3536 28.3536L19.6464 27.6464ZM27.5 18C27.5 18.8754 27.1709 19.7841 26.6049 20.7075C26.0399 21.6293 25.2575 22.5354 24.3964 23.3964C23.5366 24.2563 22.6122 25.0578 21.7695 25.7756C20.9371 26.4847 20.1648 27.1281 19.6464 27.6464L20.3536 28.3536C20.8352 27.8719 21.5629 27.2653 22.418 26.5369C23.2628 25.8172 24.2134 24.9937 25.1036 24.1036C25.9925 23.2146 26.8351 22.2457 27.4576 21.23C28.0791 20.2159 28.5 19.1246 28.5 18H27.5ZM24 14.5C25.933 14.5 27.5 16.067 27.5 18H28.5C28.5 15.5147 26.4853 13.5 24 13.5V14.5ZM21.685 15.3749C22.3023 14.83 23.112 14.5 24 14.5V13.5C22.8591 13.5 21.8163 13.9252 21.0233 14.6251L21.685 15.3749Z" fill="#999999" />
        </svg>
    )
}

export default ButtonFavorites