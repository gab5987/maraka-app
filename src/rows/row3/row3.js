import "./row3.css";
import React from "react";

export default function Services(props){
    var services = props.resumeInfo;
    var itens = services.itens.map((serv, i) =>{
        return(
            <li key={i}>
                <span>
                    <div>
                        <i className={i}>
                            <p>
                                {serv.name}
                            </p>
                        </i>
                    </div>
                </span>
            </li>
        );
    });

    return(
        <div className="row3-container">
            <div className="row3-title">
                <h1> {services.pageName} </h1>
            </div>
            <div className="column-row3">
              <ul>{itens}</ul>
            </div>
        </div>
    );
}