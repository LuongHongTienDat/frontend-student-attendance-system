import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css';
import SideBar from './sideBar'

function BSForm(props) {
    return (
        <div className="page">
            <div className="container fr">
                <div className="row">
                    <SideBar formdata={props.formdata} tab={0} />
                    <div className="col-8" id="INFO-PASS">
                        <form className="info-panel" onSubmit={props.handleSubmit}>
                            <h4 className="tab__info text-center">Thông tin</h4>
                            <div className="form-group form-group-sm">
                                <label htmlFor="name" className="name">Tên</label>
                                <input type="text"
                                    name="FullName"
                                    className="form-control form-control-sm"
                                    value={props.formdata.FullName}
                                    placeholder="Nhập tên..."
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Xin đừng bỏ trống")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    onChange={props.handleChange} />
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="birthday" className="birthday">Ngày sinh</label>
                                    <input type="date"
                                        name="DoB"
                                        className="form-control form-control-sm"
                                        defaultValue={props.formdata.DoB}
                                        placeholder="Nhập ngày sinh..."
                                        onInput={(e) => e.target.setCustomValidity("")}
                                        onChange={props.handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="studentID" className="studentID">Mã số sinh viên</label>
                                    <input type="text" pattern="[1-2]([0-9]{6})"
                                        name="StudentID"
                                        className="form-control form-control-sm"
                                        value={props.formdata.StudentID}
                                        placeholder="Nhập ID..."
                                        required
                                        onInvalid={(e) => e.target.setCustomValidity("Hãy nhập đúng dạng của mã số sinh viên")}
                                        onInput={(e) => e.target.setCustomValidity("")}
                                        onChange={props.handleChange} />
                                </div>
                            </div>
                            <div className="form-group form-group-sm">
                                <label htmlFor="email" className="email">Email</label>
                                <input type="text" pattern="[a-z0-9._]+@hcmut.edu.vn"
                                    name="Email"
                                    className="form-control form-control-sm"
                                    aria-describedby="emailHelp"
                                    value={props.formdata.Email}
                                    placeholder="Nhập email..."
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Hãy nhập email có đuôi hcmut.edu.vn")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    onChange={props.handleChange} />

                                <label htmlFor="phone" className="phone">Số điện thoại</label>
                                <input type="text" pattern="[0-9]{10,11}"
                                    name="PhoneNum"
                                    className="form-control form-control-sm"
                                    value={props.formdata.PhoneNum}
                                    placeholder="Nhập số điện thoại..."
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Hãy nhập đúng dạng số điện thoại")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    onChange={props.handleChange} />
                            </div>

                            <button type="submit" className="btn btn-success btn-sm">Lưu</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_FullName: props.data.FullName,
            FullName: props.data.FullName,
            DoB: props.data.DoB,
            StudentID: props.data.StudentID,
            Email: props.data.Email,
            PhoneNum: props.data.PhoneNum,
            submitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
            submitted: false,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            old_FullName: this.state.FullName,
            submitted: true,
        });
        alert('Form submitted (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
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

export default InfoPanel;