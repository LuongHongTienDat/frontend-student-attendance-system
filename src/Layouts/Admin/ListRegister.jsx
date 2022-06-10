import React, {useState, useEffect } from "react";
import Header from '../Header'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListRegister.css';
import data from './data.json';
const ListRegister = () => {
    const [registers, setRegisters] = useState([]);
    useEffect(() => {
        setRegisters(data);
    },[])

    return (
        <div id = "ListRegister">
            <div className="container">                
                <h1 className='title mr-5 mt-5'>DANH SÁCH ĐĂNG KÝ</h1>
                <div className='sub-container'>
                    <div className='title-sub row'>
                        <p className='col-md-1'>STT</p>
                        <p className='col-md-4 px-4'>Tên sự kiện</p>
                        <p className='col-md-3'>Thời gian đăng ký</p>
                        <p className='col-md-4'></p>
                    </div>
                    <div className="row container-table">
                        
                    <table>
                    {registers.map((register,key)=>
                        <tr className='row' key={key}>
                            <td className='col-md-1'>{register.id}</td>
                            <td className='col-md-4'>{register.name}</td>
                            <td className='col-md-3'>{register.time}</td>
                            <td className='col-md-4'>
                                <div className="button row">
                                    <a  className = 'col-md-4 detail px-0' rel="stylesheet" href="#">Chi tiết</a>                                    
                                    <button className='col-md-4 btn-accept'>Đồng ý</button>
                                    <button className='col-md-4 btn-delete'>Từ chối</button>
                                </div>
                            </td>
                        </tr>
                    )}                            
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListRegister;