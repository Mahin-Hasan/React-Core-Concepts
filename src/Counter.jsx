import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const hadnleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const hadnleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{ border: '2px solid purple' }}>
            <h3>Counter: {count}</h3>
            <button onClick={hadnleAdd}>Add</button>
            <button onClick={hadnleReduce}>Reduce</button>
        </div>
    )
}