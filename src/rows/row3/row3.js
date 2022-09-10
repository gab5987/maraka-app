import "./row3.css";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';


export default function Services(props){
    var services = props.resumeInfo;
    var itens = services.itens;

    return(
        <section className="services">
            <div className="row3-title">
                <h1> {services.pageName} </h1>
            </div>
                <div className="services-center">
                    {itens.map((Item, index) => {
                        return (
                            <article key={index} className="service">
                                <span> <i className={Item.icon}></i> </span>
                                <h6>{Item.name}</h6>
                                <p>{Item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
    );
}