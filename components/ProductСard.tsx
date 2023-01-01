//Библиотеки
import { FC, useRef, useState } from "react"
//Компоненты
import Image from "next/image"
import Link from "next/link"
import Bestseller from "./Bestseller"
import Button from "./Button"
import ButtonFavorites from "./ButtonFavorites"
import List from "./List"
import StarGrade from "./StarGrade"
//Стили
import styles from "../styles/ProductСard.module.scss"
// Типы
import { IProductСard } from "../types/types";

const ProductСard: FC<IProductСard> = ({
    name,
    type,
    price,
    imgSrc,
    grade = 0,
    isBasket = false,
    isFavorites = true,
    isHit = false,
    comment = null,
}) => {

    const formatPrice = new Intl.NumberFormat('ru-RU').format(price);

    const initialStars = generateStars(grade);

    const stars = useRef<boolean[]>(initialStars);

    function generateStars(grade: number) {
        let res: boolean[] = [];

        for (let i = 0; i < Math.floor(grade); i++) {
            res.push(true)
        }

        for (let i = 0; i < 5 - Math.floor(grade); i++) {
            res.push(false)
        }

        return res;
    }

    const [amount, setAmount] = useState<number>(1);

    function incAmount() {
        setAmount(amount + 1)
    }

    function dicAmount() {
        const isZero = amount === 0;

        if (!isZero) {
            setAmount(amount + -1)
        }
    }

    function addToBasket() {
        console.log("Добавили в корзину");
    }

    const [favorites, setFavorites] = useState<boolean>(isFavorites);

    function addFavorite() {
        if (favorites) {
            setFavorites(!favorites);
            console.log("Убрали из избраного");
        } else if (!favorites) {
            setFavorites(!favorites);
            console.log("Добавили в избраное");
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isHit &&
                    <div className={styles.wrapper_marker}>
                        <Bestseller />
                    </div>
                }
                <div className={styles.wrapper_img}>
                    <Image
                        className={styles.img}
                        src={imgSrc}
                        alt="img"
                        width={220}
                        height={158}
                        priority
                    />
                </div>
                <div className={styles.description}>
                    <div className={styles.other_info}>
                        {type &&
                            <span className={styles.type}>
                                {type}
                            </span>
                        }
                        <div className={styles.grade}>
                            {/* 
                                Я понимаю что использовать индексы для атрибута
                                key - не есть хорошая практика, но в данном случае 
                                нам не нужно удалять/заменять звезды, они отрисуются 
                                5 раз и мы к ним больше не притронимся
                            */}
                            <List
                                arr={stars.current}
                                render={(item, indx) =>
                                    <StarGrade
                                        isEmpty={item}
                                        key={indx}
                                    />
                                }
                            />
                        </div>
                        {comment &&
                            <div className={styles.reviews}>
                                <Link href="#" >
                                    3 отзыва
                                </Link>
                            </div>
                        }
                    </div>
                    <p className={styles.name}>
                        {name}
                    </p>
                    <p className={styles.price}>
                        <span className={styles.price_num}>
                            {formatPrice} ₽
                        </span>
                        /шт
                    </p>
                    <div className={styles.controlls}>
                        {isBasket ?
                            <div>
                                <Button
                                    text="В корзине"
                                    addStyles={styles.count_btn_dop}
                                    onClick={addToBasket}
                                />
                            </div>
                            :
                            <div className={styles.count}>
                                <button className={styles.count_btn}>В корзину</button>
                                <div className={styles.count_controls}>
                                    <div onClick={dicAmount} className={styles.controlls_dic}>
                                        <Image
                                            className={styles.img}
                                            src={"/assets/img/-.svg"}
                                            alt="img"
                                            width={10}
                                            height={2}
                                        />
                                    </div>
                                    <span className={styles.controlls_num}>{amount}</span>
                                    <div onClick={incAmount} className={styles.controlls_inc}>
                                        <Image
                                            className={styles.img}
                                            src={"/assets/img/+.svg"}
                                            alt="img"
                                            width={10}
                                            height={10}
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                        <div>
                            <ButtonFavorites
                                isFavorites={favorites}
                                onClick={addFavorite}
                            />
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ProductСard