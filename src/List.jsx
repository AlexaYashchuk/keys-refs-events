import { useState, useEffect} from "react";

function List ({array}) {

    const [item, setItem] = useState(array);

    useEffect(() => {
        setItem(array);
    },[array])

    const changeItem = (id) => {
        //console.log(`id=`+id);
            
        const newItem = [...item];

        for (let i = 0; i < newItem.length; i++) {
            if (newItem[i].id == id) {
                newItem[i].name = `!!!${newItem[i].name}`;
            }
        }
            setItem(newItem);
            console.log(newItem);
        };
    

    const result = item.map((item) => {
        return (
            <li key={item.id}>
            {item.name}
            <button onClick={() => changeItem(item.id)}>Добавить !!!</button>
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