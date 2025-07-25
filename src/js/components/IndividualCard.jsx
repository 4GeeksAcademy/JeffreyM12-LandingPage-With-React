import React from "react";

const IndividualCard = ({title, description}) => {
    return (
        <div className="card" style={{width: 18+"rem"}}>
            <img className="card-img-top" src="https://picsum.photos/200/300"  alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

export default IndividualCard;