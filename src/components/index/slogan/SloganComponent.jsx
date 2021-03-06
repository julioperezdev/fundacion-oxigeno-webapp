import React from "react"

import SocialMediaComponent from "../../common/socialMedia/SocialMedia"

import {Link} from "react-router-dom"

import "./SloganComponent.css"

const SloganComponent = () =>{
    return (
        <div className="slogan-component">
            <h1 className="slogan-component-title">Fundación oxígeno trabaja por los derechos de los niños, niñas y adolescentes</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error aspernatur deleniti in.</p>
            <Link className="slogan-component-link" to="/donar">DONAR</Link>
            <SocialMediaComponent 
            style="slogan-component-socialmedia"/>
        </div>
    )
}

export default SloganComponent;