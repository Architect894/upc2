import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{
                fontFamily: 'Quicksand',
                width: '100%',
                height: '8%',
                position: 'fixed',
                top: '0',
                left: '0px',
                right: '0px', 
                zIndex: '1000'
            }}>
            <div className="container-fluid">
                <ul className="navbar-nav flex-row w-100 justify-content-between">
                    <li className="nav-item">
                        <a className="nav-link text-white hover-effect " href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white hover-effect" href="#our-story">Our Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white hover-effect" href="#our-services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white hover-effect" href="#our-reviews">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white hover-effect" href="#contactUs">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}