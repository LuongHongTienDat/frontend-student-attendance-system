import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header_0.css';

//To install bootstrap run: npm install react-bootstrap bootstrap

const Header_0 = () => {
    return (
        <nav id="mainNavbar" className="navbar fixed-top">
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
                    <a href="https://www.youtube.com/watch?v=Mi2cURoOAYY" className="nav-link signup">Đăng ký</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.youtube.com/watch?v=kCeyfJ1C4T8" className="nav-link login">Đăng nhập</a>
                </li>
            </ul>

        </nav>
    );
}
export default Header_0;