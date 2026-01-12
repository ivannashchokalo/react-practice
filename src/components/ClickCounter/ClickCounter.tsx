import { useState } from "react";

interface ClickCounterProps{
    onUpdate: () => void;
}

export default function ClickCounter({onUpdate}: ClickCounterProps) {
    // стейт
    const [click, setClick] = useState(0);

    const handleClick3 = () => {
        setClick(click + 1)
        onUpdate()
    }
    return <button onClick={handleClick3}>{click}</button>
}