import CatInfo from "../CatInfo/CatInfo";
import type { Cat } from "../../types";
import css from './CatsInfo.module.css'

interface CatsListProps {
    cats: Cat[]
}

export default function CatsList({ cats }: CatsListProps) {
    return <ul className={css.catsList}>{cats.map(cat => <li key={cat.id}><CatInfo cat={cat} /></li>)}</ul>
}
