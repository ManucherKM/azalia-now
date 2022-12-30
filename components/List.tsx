import { IList } from "../types/types"

function List<T>({ arr, render }: IList<T>) {
    return (
        <>
            {arr.map(render)}
        </>
    )
}

export default List