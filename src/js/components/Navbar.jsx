import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white-50" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white-50" aria-current="page" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white-50" aria-current="page" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}

export default Navbar;