import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header_0.css';

const Header_0 = () => {
    return (
        <nav id="mainNavbar" class="navbar fixed-top">
            <a class="navbar-brand" href="https://cse.hcmut.edu.vn/"
                target="_blank" rel="noopener noreferrer">
                <img src="./hcmut.png" width="45" height="42" class="d-inline-block align-top" alt=""></img>
                <div class="brand-name d-inline-block">
                    <div>TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐHQG-HCM</div>
                    <div>KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</div>
                </div>
            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a href="https://www.youtube.com/watch?v=Mi2cURoOAYY" class="nav-link signup">Đăng ký</a>
                </li>
                <li class="nav-item">
                    <a href="https://www.youtube.com/watch?v=kCeyfJ1C4T8" class="nav-link login">Đăng nhập</a>
                </li>
            </ul>

        </nav>
    );
}
export default Header_0;