import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Components/useForm';
import validate from '../../Components/ValidateForm';
// import validate from '../../Components/ValidateForm';
import './Register.css'


const Register = (submitForm) => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate)
    
    return (
        <div className="container" style={{    width: '100vw', height: '100vh', padding: '0'}}>
        <div className='form-register'>
        <form action="" method="POST" className="form" id="form-1" onSubmit={handleSubmit}>
        <h3 className="heading">Đăng ký tài khoản</h3>
       
        <div className="form-group">
            <label htmlFor="fullname" className="form-label">Tên đầy đủ</label>
            <input id="fullname" type="text" name="fullname" placeholder="Nguyễn Văn A" className="form-input" value={values.fullname} onChange = {handleChange}
            />
            {errors.fullname &&  <span className="form-message">{errors.fullname}</span>}
        </div>
        
        <div className="form-group">
        <div className="form-group-2">
            <label  htmlFor="id" className="form-label">Mã số sinh viên</label>
            <div> 
                <input id="id" type="text" name="id" placeholder="2010448" className="form-input " value={values.id} onChange = {handleChange}/>
                <span>  </span>
                {errors.id &&  <span className="form-message">{errors.id}</span>}        
            </div>
        </div>
            
        <div className="form-group-2 form-date">
            <label  htmlFor="birthday" className="form-label">Ngày sinh</label>
            <div> 
                <input id="birthday" type="date" name="birthday"  className="form-input" value={values.birthday} onChange = {handleChange}/>
            {errors.birthday &&  <span className="form-message">{errors.birthday}</span>}
            </div>
        </div>
        </div>
            
        
        <div className="form-group ">
            <label  htmlFor="email" className="form-label">Email</label>
            <div> 
                <input id="email" type="email" name="email" placeholder="email@hcmut.edu.com" className="form-input" value={values.email} onChange = {handleChange}/>
            </div>
            {errors.email &&  <span className="form-message">{errors.email}</span>}
        </div>
        <div className="form-group ">
            <label  htmlFor="phone" className="form-label">Số điện thoại</label>
            <div> 
                <input id="phone" type="text" name="phone" placeholder="0384094123" className="form-input" value={values.phone} onChange = {handleChange}/>
            </div>
            {errors.phone &&  <span className="form-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
            <label  htmlFor="password" className="form-label">Mật khẩu</label>
            <input id="password" type="password" name="password" placeholder="Tạo mật khẩu" className="form-input" value={values.password} onChange = {handleChange}/>
            {errors.password &&  <span className="form-message">{errors.password}</span>}
        </div>
        
        
        <div className="form-group">
            {Object.keys(errors).length!==0 && <span className="form-messages">Cần nhập đẩy đủ thông tin</span>}
        <div className="form-aside">
            <p>Bạn đã có tài khoản?</p><Link to="/form-login" className="login-link">Đăng nhập</Link>
        </div>
        <button className="form-submit">Đăng ký</button>
        </div>
 
      </form>
      </div>
      </div>
    )
}

export default Register;
