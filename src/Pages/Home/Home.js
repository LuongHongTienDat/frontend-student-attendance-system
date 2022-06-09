import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Home.module.css"
import { BsFolderPlus } from "react-icons/bs";

const Error = props => {
    return (
        <p className={classes['error']}>
            {props.children}
        </p>
    )
}
const Home = props => {
    const [formInput, setFormInput] = useState({
        name: "",
        startTime: "",
        startDate: "",
        endTime: "",
        endDate: "",
        location: ""
    })
    const [isFilled,setIsFilled] = useState(true);
    const [isChrono,setIsChrono] = useState(true);

    const nameChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,name:e.target.value}
        })
    }
    const timeStartChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,startTime:e.target.value}
        })       
    }
    const dateStartChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,startDate:e.target.value}
        })        
    }
    const timeEndChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,endTime:e.target.value}
        })       
    }
    const dateEndChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,endDate:e.target.value}
        })       
    }
    const locationChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,location:e.target.value}
        })       
    }
    const submitHandler = ()=>{
        if (Object.values(formInput).some(value => value == false)) 
        {
            setIsFilled(false);
            setIsChrono(true);
            return;
        }
        const startTime = formInput.startTime.split(':').map(Number);
        const startDate = formInput.startDate.split('-').map(Number);
        const endTime = formInput.endTime.split(':').map(Number);
        const endDate = formInput.endDate.split('-').map(Number);
        const start = new Date(startDate[0],startDate[1],startDate[2],startTime[0],startTime[1],0);
        const end = new Date(endDate[0],endDate[1],endDate[2],endTime[0],endTime[1],0);
        if (start.getTime() > end.getTime()){
            setIsFilled(true);
            setIsChrono(false);
            return;            
        }
        setIsFilled(true);
        setIsChrono(true);
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
                            id="eventNameInput" placeholder="Nhập tên sự kiện" style={{padding:'0.4rem'}}
                            onChange={nameChangeHandler} value={formInput.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time" style={{padding:'0.4rem'}}>Thời gian</label> <br/>
                        <div className='row' style={{padding:'0.4rem'}}>
                            <div className="col-sm-2">
                                <label htmlFor="timeStart">Từ:</label>
                            </div>
                            <div className="col-sm-5">
                                <input onChange={timeStartChangeHandler} value={formInput.startTime} type="time" className={`${classes['time-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                            <div className="col-sm-5">
                                <input onChange={dateStartChangeHandler} value={formInput.startDate} type="date" className={`${classes['date-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                        </div>

                        <div className='row' style={{padding:'0.4rem'}}>
                            <div className="col-sm-2">
                                <label htmlFor="timeStart">Đến:</label>
                            </div>
                            <div className="col-sm-5">
                                <input onChange={timeEndChangeHandler} value={formInput.endTime} type="time" className={`${classes['time-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                            <div className="col-sm-5">
                                <input onChange={dateEndChangeHandler} value={formInput.endDate} type="date" className={`${classes['date-input']} ${classes['short-input']}`} id="timeStart" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="place" style={{padding:'0.4rem'}}>Địa điểm</label>
                        <input type="text" className={`form-control ${classes['long-input']}`} id="eventNameInput" 
                        placeholder="Nhập địa điểm" style={{padding:'0.4rem'}} onChange={locationChangeHandler}
                        value={formInput.location}/>
                    </div>
                    <div className={classes.fileContainer}>
                        <div className='row'>
                           <p> <BsFolderPlus/>  Chọn tập dữ liệu</p>
                        </div>
                    </div>
                    {!isFilled && <Error>Cần điền đầy đủ thông tin để đăng ký</Error>}
                    {!isChrono && <Error>Thời gian chưa hợp lệ</Error>}
                    {isChrono && isFilled && <Error></Error>}

                    <div onClick={submitHandler} className={`${classes['btn-submit']}`} style={{margin:'1rem'}}>
                       <p>Submit</p>
                    </div>
                </form>               
            </div>
        </div>
    )
}
export default Home;