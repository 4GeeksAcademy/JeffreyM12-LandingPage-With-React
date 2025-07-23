import React from "react";

const Card = () => {
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Card title</h5>
                <p className="card-text d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;