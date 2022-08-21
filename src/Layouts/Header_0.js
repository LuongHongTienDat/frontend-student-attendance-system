import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

//To install bootstrap run: npm install react-bootstrap bootstrap

const Header_0 = () => {
    return (
        <nav id="mainNavbar" className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://cse.hcmut.edu.vn/"
                    target="_blank" rel="noopener noreferrer">
                    <img src=".././hcmut.png" width="45" height="42" className="d-inline-block align-top" alt=""></img>
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
                    <ul className="nav justify-content-end logsig">
                        <li className="nav-item">
                            <a href="https://www.youtube.com/watch?v=Mi2cURoOAYY" className="nav-link align-text-top signup">Đăng ký</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.youtube.com/watch?v=kCeyfJ1C4T8" className="nav-link align-text-top login">Đăng nhập</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header_0;


