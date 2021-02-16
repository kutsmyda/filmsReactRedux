
import React from "react";
import {FilmItem} from "../FilmItem";
import styles from './FilmList.module.css'


export const FilmList = ({items})=>{

    console.log( 'from FilmList')

    return(
        <div className={styles.listWrapper}>

            {items.map((item)=><div key={item.id} className={styles.itemWrapper}><FilmItem  {...item}/></div>)}
        </div>
    )


}