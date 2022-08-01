import React from "react";
import s from "../Technology/Technology.module.css"



export default function Technology(){
    return(
        <div className={s.container}>
            <div className={s.react}></div>
            <div className={s.node}></div>
            <div className={s.java}></div>
            <div className={s.sql}></div>
            <div className={s.html}></div>
            <div className={s.css}></div>
            <div className={s.git}></div>
        </div>
    )
}