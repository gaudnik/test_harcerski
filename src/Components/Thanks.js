import React from "react";
import { useParams } from "react-router-dom";

const Thanks = () => {
    const { firstName, lastName } = useParams();
    return (
        <div className="thanks">
            <div className="thanks__box">
                <span className="thanks__name-header">{firstName} {lastName}</span>
                <h2 className="thanks__header">
                    Dziękujemy za wykonanie testu!
                </h2>
                <div className="thanks__background-mobile"></div>

                <p className="thanks__text">
                    Wyniki dostępne 
                    <br/>
                    po zalogowaniu :)
                </p>
            </div>
        </div>
    )

}

export default Thanks;