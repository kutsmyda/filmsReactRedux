
import React from "react";
import {FilmItem} from "../FilmItem";
import styles from './FilmList.module.css'


export const FilmList = ({items, onFilmClick})=>{

    console.log( 'from FilmList')

    return(
        <div className={styles.listWrapper}>

            {items.map((item)=><div onClick={()=>onFilmClick(item)} key={item.id}  className={styles.itemWrapper}><FilmItem  {...item}/></div>)}
        </div>
    )


}