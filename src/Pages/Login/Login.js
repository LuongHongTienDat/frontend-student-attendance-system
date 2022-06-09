import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import './Login.css'
import Validator from '../../Components/ValidateForm';
import useForm from '../../Components/useForm';


const Login = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(Validator);
    return (
        <React.Fragment>
        <Header></Header>
        <div className="form-login">
        <form action="" method="POST" className="form" id="form-1" onSubmit={handleSubmit}>
        <h3 className="heading">Đăng nhập</h3>
        
        
        <div className="form-group ">
            <label  htmlFor="email" className="form-label">Email</label>
            <div> 
                <input id="email" type="email" name="email" placeholder="email@hcmut.edu.com" className="form-input" value={values.email} onChange = {handleChange}/>
            </div>
            {errors.email &&  <span className="form-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
            <label  htmlFor="password" className="form-label">Mật khẩu</label>
            <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" className="form-input" value={values.password} onChange = {handleChange}/>
            {errors.password &&  <span className="form-message">{errors.password}</span>}
        </div>
        <div className="form-group">

        <div className="btn-login">
           
        </div><button className="form-submit">Đăng nhập</button>
        </div>
        <div  className="form-aside">
            <p>Bạn chưa có tài khoản?</p><Link to="/form-register" className="register-link">Đăng kí</Link>
            <Link to="#" className="forgot-link">Quên mật khẩu</Link>
        </div>
        
      </form>
      </div>
      <Footer></Footer>
      </React.Fragment>
    )
}

export default Login;
