import React from "react";
import earth from './assets/earth.svg';
export default function Header(){

    return (
        <header className="header">
            <img src={earth} alt="" />
            <p>my travel journal</p>
        </header>
    )
}