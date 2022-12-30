import { ReactNode } from "react";

export interface IButton {
    text: string,
    onClick: () => void,
    addStyles?: string,
}

export interface IButtonFavorites {
    onClick: () => void,
    isFavorites?: boolean,
}

export interface IList<T> {
    arr: T[],
    render: (item: T, indx?: number) => ReactNode,
}

export interface IStarGrade {
    isEmpty: boolean,
}

export interface IProductСard {
    name: string,
    imgSrc: string,
    type: string,
    grade?: number,
    price: number,
    isFavorites?: boolean,
    isBasket?: boolean,
    isHit?: boolean,
    comment?: IComment,
}

interface IComment {
    id: string,
    amount: number
}