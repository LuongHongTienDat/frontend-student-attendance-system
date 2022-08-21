import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <nav id="mainNavbar" className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://cse.hcmut.edu.vn/"
                    target="_blank" rel="noopener noreferrer">
                    <img src=".././hcmut.png" width="45" height="42" className="d-inline-block align-top logo" alt=""></img>
                    <div className="brand-name d-inline-block">
                        <div>TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐHQG-HCM</div>
                        <div>KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</div>
                    </div>
                </a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#responsive" 
                        aria-controls="responsive" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="responsive">
                    <ul className="justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link admin" to="/admin">ADMINISTRATOR</Link>
                            {/* <Link className="nav-link admin" to="/info">USER</Link> */}
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link noti">
                                <img className="d-inline-block my-3" src="./noti_icon.png" width="18" alt=""></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    );
}
export default Header;