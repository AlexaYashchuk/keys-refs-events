import { useState, useEffect} from "react";

function List ({array}) {

    

    const [item, setItem] = useState(array);

    useEffect(() => {
        setItem(array);
    },[array])

        const changeItem = (index) => {

            const newItem = [...item];

            newItem[index] = `!!!${newItem[index]}`;

            setItem(newItem);
            console.log(newItem);
        };
    

    const result = item.map((item,index) => {
        return (
            <li key={index}>
            {item}
            <button onClick={() => changeItem(index)}>Добавить !!!</button>
        </li>
        )
    })

    
    return (
        <>
            <ul>{result}</ul>
        </>
    )
}

export default List