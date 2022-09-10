import "./row3.css";
import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default function Services(props){
    var services = props.resumeInfo;
    var itens = services.itens;

    return(
        <section className="services">
            <div className="row3-title">
                <h1> {services.pageName} </h1>
            </div>
                <div className="services-center">
                    {itens.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{ <FaCocktail/> }</span>
                                <h6>{item.name}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
    );
}
/*
<div className="row3-container">
            <div className="row3-title">
                <h1> {services.pageName} </h1>
            </div>
*/