import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sideBar'

import './info.css';

function BSForm(props) {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <SideBar formdata={props.formdata} tab={2} />
                    <div className="col-8">
                        <form className="info-panel" onSubmit={props.handleSubmit}>
                            <h4 className="tab__password text-center">Đổi mật khẩu</h4>
                            <div className="form-group form-group-sm">
                                <label htmlFor="old-pass">Mật khẩu cũ</label>
                                <input type={props.passwordShown ? "text" : "password"}
                                    name="oldPass"
                                    className="form-control form-control-sm"
                                    value={props.formdata.oldPass}
                                    placeholder="Nhập mật khẩu cũ"
                                    onChange={props.handleChange} />

                                <label htmlFor="new-pass">Mật khẩu mới</label>
                                <input type="password"
                                    name="newPass"
                                    className="form-control form-control-sm"
                                    value={props.formdata.newPass}
                                    placeholder="Nhập mật khẩu mới"
                                    onChange={props.handleChange} />

                                <label htmlFor="old-pass">Xác nhận mật khẩu mới</label>
                                <input type="password"
                                    name="confirmPass"
                                    className="form-control form-control-sm"
                                    value={props.formdata.confirmPass}
                                    placeholder="Nhập lại mật khẩu mới"
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

class PasswordChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_FullName: props.data.FullName,
            FullName: props.data.FullName,
            oldPass: props.data.Password,
            newPass: props.data.Password,
            confirmPass: props.data.Password,
            passwordShown: false,
            submitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    togglePassword() {
        this.setState({ passwordShown: !this.passwordShown, })
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
            submitted: false,
        });

        if (value.confirmPass !== value.newPass) alert("Error!");
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted:' + this.state.FullName);
        console.log(this.state);
    };

    render = () => {
        return (
            <BSForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                formdata={this.state} />
        );
    };
}

export default PasswordChange;