import React from "react";
import { useParams } from "react-router-dom";

const Thanks = () => {
    const { firstName, lastName } = useParams();
    return (
        <div className="thanks">
            <h2 className="thanks__header">
            {firstName} {lastName}
            <br/>
                Dziękujemy za wykonanie testu!
            </h2>
            <p className="thanks__text">
                Wyniki dostępne po zalogowaniu :)
            </p>
        </div>
    )

}

export default Thanks;