import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <div>
                {menu.map((elem, i)=>{
                    return <NavBatItem key={i} data={elem} />
                })}
            </div>
        );
    }
}