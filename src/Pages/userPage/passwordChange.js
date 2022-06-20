import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sideBar'

import './info.css';

function BSForm(props) {
    return (
        <div className="page">
            <div className="container fr" id="INFO-PASS">
                <div className="row">
                    <SideBar formdata={props.formdata} tab={2} />
                    <div className="col-8">
                        <form className="info-panel" onSubmit={props.handleSubmit}>
                            <h4 className="tab__password text-center">Đổi mật khẩu</h4>
                            <div className="form-group form-group-sm">
                                <label htmlFor="old-pass">Mật khẩu cũ</label>
                                <input type="password" pattern={props.password}
                                    name="oldPass"
                                    className="form-control form-control-sm"
                                    placeholder="Nhập mật khẩu cũ"
                                    onInvalid={(e) => e.target.setCustomValidity("Mật khẩu chưa chính xác")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    onChange={props.handleChange}
                                />

                                <label htmlFor="new-pass">Mật khẩu mới</label>
                                <input type="password"
                                    name="newPass"
                                    className="form-control form-control-sm"
                                    value={props.formdata.newPass}
                                    placeholder="Nhập mật khẩu mới"
                                    onChange={props.handleChange} />

                                <label htmlFor="old-pass">Xác nhận mật khẩu mới</label>
                                <input type="password" pattern={props.formdata.newPass}
                                    name="confirmPass"
                                    className="form-control form-control-sm"
                                    value={props.formdata.confirmPass}
                                    placeholder="Nhập lại mật khẩu mới"
                                    onInvalid={(e) => e.target.setCustomValidity("Mật khẩu xác nhận chưa khớp")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    onChange={props.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-success btn-sm">Lưu</button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
}

function PasswordChange(props) {
    const [data, setData] = useState({
        old_FullName: props.data.FullName,
        FullName: props.data.FullName,
        oldPass: '',
        newPass: '',
        confirmPass: '',
        submitted: false,
    })

    const passw = data.oldPass;

    function handleChange(event) {
        const {name, value} = event.target;
        setData(prev => ({
            ...prev,
            [name]: value,
            submitted: false,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setData(prev => ({
            ...prev,
            oldPass: prev.newPass,
        }))
        alert('Form submitted');
        console.log(data);
    };

    return (
        <BSForm
            handleSubmit={handleSubmit.bind(this)}
            handleChange={handleChange.bind(this)}
            formdata={data} password={passw} />
    );
}

export default PasswordChange;