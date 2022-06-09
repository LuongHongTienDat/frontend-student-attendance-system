import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
    return (
        <nav id="mainNavbar" className="navbar sticky-top">
            <a className="navbar-brand" href="https://cse.hcmut.edu.vn/"
                target="_blank" rel="noopener noreferrer">
                <img src="./hcmut.png" width="45" height="42" className="d-inline-block align-top" alt=""></img>
                <div className="brand-name d-inline-block">
                    <div>TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐHQG-HCM</div>
                    <div>KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</div>
                </div>
            </a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a href="https://www.youtube.com/watch?v=Mi2cURoOAYY" className="nav-link admin">ADMINISTRATOR</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link noti">
                        <img src="./noti_icon.png" width="18" className="d-inline-block align-top" alt=""></img>
                    </a>
                </li>
            </ul>

        </nav>
    );
}
export default Header;