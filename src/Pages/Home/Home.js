import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Home.module.css"
import { BsFolderPlus } from "react-icons/bs";
import Button from '../../Components/Button/Button';
import InputTime from '../../Components/InputTime/InputTime';
import ChoosingFileModal from '../../Components/ChoosingFileModal/ChoosingFileModal';
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
    const [isChoosingData, setIsChoosingData] = useState(false)
    const hideModalHandler = ()=>{
        setIsChoosingData(false)
    }
    const openModalHandler = ()=>{
        setIsChoosingData(true)
    }
    const nameChangeHandler = (e) => {
        setFormInput(prev => {
            return {...prev,name:e.target.value}
        })
    }
    const timeStartChangeHandler = (value) => {
        setFormInput(prev => {
            return {...prev,startTime:value}
        })       
    }
    const dateStartChangeHandler = (value) => {
        setFormInput(prev => {
            return {...prev,startDate:value}
        })        
    }
    const timeEndChangeHandler = (value) => {
        setFormInput(prev => {
            return {...prev,endTime:value}
        })       
    }
    const dateEndChangeHandler = (value) => {
        setFormInput(prev => {
            return {...prev,endDate:value}
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
        console.log(formInput);
    }
    return (
        <div className={`row ${classes['row-container']}`}>
            {isChoosingData && <ChoosingFileModal onConfirm = {hideModalHandler} />}
            <div className={`col-md-7 ${classes['container-col-7']}`}>
                <div>
                    CSE Students Attendance <br/> Website
                </div>
                <p>
                Website d??ng ????? ????ng k?? ??i???m danh c??c s??? ki???n <br/>
                 c???a khoa Khoa h???c v?? K??? thu???t M??y t??nh
                </p>
            </div>
            <div className={`col-md-4 ${classes['container-col-4']}`}>
                <div className={`${classes['form-name']}`}>
                    ????NG K?? S??? KI???N
                </div>
                <form className={`${classes['form-event']}`}>
                    <div className="form-group">
                        <label htmlFor="eventName" style={{padding:'0.4rem'}}>T??n s??? ki???n</label>
                        <input type="text" className={`form-control ${classes['long-input']}`} 
                            id="eventNameInput" placeholder="Nh???p t??n s??? ki???n" style={{padding:'0.4rem'}}
                            onChange={nameChangeHandler} value={formInput.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time" style={{padding:'0.4rem'}}>Th???i gian</label> <br/>
                        <InputTime onChangeTime={timeStartChangeHandler}
                                   onChangeDate={dateStartChangeHandler}
                                   time={formInput.startTime} date={formInput.startDate}
                        >
                            T???
                        </InputTime>
                        <InputTime onChangeTime={timeEndChangeHandler}
                                   onChangeDate={dateEndChangeHandler}
                                   time={formInput.endTime} date={formInput.endDate}
                        >
                            ?????n
                        </InputTime>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="place" style={{padding:'0.4rem'}}>?????a ??i???m</label>
                        <input type="text" className={`form-control ${classes['long-input']}`} id="eventNameInput" 
                        placeholder="Nh???p ?????a ??i???m" style={{padding:'0.4rem'}} onChange={locationChangeHandler}
                        value={formInput.location}/>
                    </div>
                    <div onClick={openModalHandler} className={classes.fileContainer}>
                        <div className='row'>
                           <p> <BsFolderPlus/>  Ch???n t???p d??? li???u</p>
                        </div>
                    </div>
                    {!isFilled && <Error>C???n ??i???n ?????y ????? th??ng tin ????? ????ng k??</Error>}
                    {!isChrono && <Error>Th???i gian ch??a h???p l???</Error>}
                    {isChrono && isFilled && <Error></Error>}

                    <Button style={{marginBotton: '2rem', float: 'right'}}  onClick={submitHandler}>????ng k??</Button>
                </form>               
            </div>
        </div>
    )
}
export default Home;