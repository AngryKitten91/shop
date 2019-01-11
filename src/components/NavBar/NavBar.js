import React, { Component } from "react";
import './NavBar.scss'

import NavBatItem from 'components/NavBarItem'

const menu = [
    {
        name: 'Products',
        adress: 'products'
    },
    {
        name: 'Contact',
        adress: 'contact'
    }
]


export default class NavBar extends Component {
    render(){
        return (
            <div className="c-navbar">
                {menu.map((elem, i)=>{
                    return <NavBatItem key={i} data={elem} />
                })}
            </div>
        );
    }
}