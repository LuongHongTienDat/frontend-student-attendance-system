import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Components/useForm';
import validate from '../../Components/ValidateForm';
// import validate from '../../Components/ValidateForm';
import styles from './Register.module.css'
import { register } from '../../api/userApi';

const Register = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate)
    // const test = async ()=>{
    //     const result = await register({name: "Dat", email: "abd@hcmut.edu.vn", password:"123456789", passwordConfirm:"123456789"})
    //     console.log(result);
    // }
    return (

        <div className={styles.container}>
        <div className={styles.formRegister}>
        <form action="" method="POST" className={styles.form} id="form-1" onSubmit={handleSubmit}>
        <h3 className={styles.heading}>Đăng ký tài khoản</h3>       
        <div className={styles.formGroup}>
            <label htmlFor="fullname" className={styles.formLabel}>Tên đầy đủ</label>
            <input id="fullname" type="text" name="fullname" placeholder="Nguyễn Văn A" className={styles.formInput} value={values.fullname} onChange = {handleChange}
            />
            {errors.fullname &&  <span className={styles.formMessage}>{errors.fullname}</span>}
        </div>
        
        <div className={styles.formGroup}>
        <div className={styles.formGroup2}>
            <label  htmlFor="id" className={styles.formLabel}>Mã số sinh viên</label>
            <div> 
                <input id="id" type="text" name="id" placeholder="2010448" className={styles.formInput}  value={values.id} onChange = {handleChange}/>
                <span>  </span>
                {errors.id &&  <span className={styles.formMessage}>{errors.id}</span>}        
            </div>
        </div>
            
        <div className={`${styles.formGroup2} ${styles.formDate}`} >
            <label  htmlFor="birthday" className={styles.formLabel}>Ngày sinh</label>
            <div> 
                <input id="birthday" type="date" name="birthday"  className={styles.formInput} value={values.birthday} onChange = {handleChange}/>
            {errors.birthday &&  <span className={styles.formMessage}>{errors.birthday}</span>}
            </div>
        </div>
        </div>
            
        
        <div className={styles.formGroup}>
            <label  htmlFor="email" className={styles.formLabel}>Email</label>
            <div> 
                <input id="email" type="email" name="email" placeholder="email@hcmut.edu.com" className={styles.formInput} value={values.email} onChange = {handleChange}/>
            </div>
            {errors.email &&  <span className={styles.formMessage}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
            <label  htmlFor="phone" className={styles.formLabel}>Số điện thoại</label>
            <div> 
                <input id="phone" type="text" name="phone" placeholder="0384094123" className={styles.formInput} value={values.phone} onChange = {handleChange}/>
            </div>
            {errors.phone &&  <span className={styles.formMessage}>{errors.phone}</span>}
        </div>
        <div className={styles.formGroup}>
            <label  htmlFor="password" className={styles.formLabel}>Mật khẩu</label>
            <input id="password" type="password" name="password" placeholder="Tạo mật khẩu" className={styles.formInput} value={values.password} onChange = {handleChange}/>
            {errors.password &&  <span className={styles.formMessage}>{errors.password}</span>}
        </div>
        
        
        <div className={styles.formGroup}>
            {Object.keys(errors).length!==0 && <span className={styles.formMessages}>Cần nhập đẩy đủ thông tin</span>}
        <div className={styles.formAside}>
            <p>Bạn đã có tài khoản?</p><Link to="/form-login" className={styles.loginLink}>Đăng nhập</Link>
        </div>
        <button className={styles.formSubmit} onClick={test}>Đăng ký</button>
        </div>
 
      </form>
      </div>
      </div>
    )
}

export default Register;
