import { useState } from "react";
import type { Cat } from "../../types";
import ClickCounter from "../ClickCounter/ClickCounter";
import css from './CatInfo.module.css'
import clsx from "clsx";
import CountDisplay from "../CountDisplay";


interface CatInfoProps {
  cat: Cat;
}

export default function CatInfo({ cat: { name, age, image, available } }: CatInfoProps) {
    //бібліотека для комбінації стилів
    const cardStyle = clsx(css.card, available ? css.available : css.taken)


    // хендлери для кліку
    const handleClick = () => {
    }

    const handleClick1 = (number: number) => {
        console.log(number);
    }

    //стейт

    const [click, setClick] = useState(0)

    const handleClick3 = () => {
        setClick(click + 1)
    } 
    return (
        <div className={cardStyle}>
            <img src={image} alt={name} width={200} />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleClick}>Take</button>
            <button onClick={() => handleClick1(5)}>для прикладу як передавати щось через ф-ю</button>
            <ClickCounter onUpdate={handleClick3}/>
            <ClickCounter onUpdate={handleClick3}/>
            <ClickCounter onUpdate={handleClick3}/>
            <CountDisplay clicks={click} />
    </div >
  );
}
