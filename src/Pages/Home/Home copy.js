import {useState, useRef,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Home.module.css"
import { BsFolderPlus } from "react-icons/bs";

const Home = props => {
    const timeStart = useRef();
    const timeEnd = useRef();
    const timeChangeHandler = (e)=>{
        console.log(typeof(timeStart.current.value));
    }
    return (
        <div className={`row ${classes['row-container']}`}>
            <div className={`col-md-7 ${classes['container-col-7']}`}>
                <div>
                    CSE Students Attendance <br/> Website
                </div>
                <p>
                Website dùng để đăng ký điểm danh các sự kiện <br/>
                 của khoa Khoa học và Kỹ thuật Máy tính
                </p>
            </div>
            <div className={`col-md-4 ${classes['container-col-4']}`}>
                <div className={`${classes['form-name']}`}>
                    ĐĂNG KÝ SỰ KIỆN
                </div>
                <form className={`${classes['form-event']}`}>
                    <div className="form-group">
                        <label htmlFor="eventName" style={{padding:'0.4rem'}}>Tên sự kiện</label>
                        <input type="text" className={`form-control ${classes['long-input']}`} 
                            id="eventNameInput" placeholder="Nhập tên sự kiện" style={{padding:'0.4rem'}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time" style={{padding:'0.4rem'}}>Thời gian</label> <br/>
                        <div className='row' style={{padding:'0.4rem'}}>
                            <div className="col-sm-2">
                                <label htmlFor="timeStart">Từ:</label>
                            </div>
                            <div className="col-sm-5">
                                <input onChange={timeChangeHandler} ref={timeStart} type="time" className={`${classes['time-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                            <div className="col-sm-5">
                                <input  type="date" className={`${classes['date-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                        </div>

                        <div className='row' style={{padding:'0.4rem'}}>
                            <div className="col-sm-2">
                                <label htmlFor="timeStart">Đến:</label>
                            </div>
                            <div className="col-sm-5">
                                <input ref={timeEnd} type="time" className={`${classes['time-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                            <div className="col-sm-5">
                                <input  type="date" className={`${classes['date-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="place" style={{padding:'0.4rem'}}>Địa điểm</label>
                        <input type="text" className={`form-control ${classes['long-input']}`} id="eventNameInput" 
                        placeholder="Nhập địa điểm" style={{padding:'0.4rem'}}/>
                    </div>
                    <div className={classes.fileContainer}>
                        <div className='row'>
                           <p> <BsFolderPlus/>  Chọn tập dữ liệu</p>
                        </div>
                    </div>
                    <div className={`${classes['btn-submit']}`} style={{margin:'1rem'}}>
                       <p>Submit</p>
                    </div>
                </form>               
            </div>
        </div>
    )
}
export default Home;