import React,{useState} from 'react'
import classes from './ChoosingFileModal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'
import { BsFolder2, BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

const ChoosingFileModal = props => {
    const [data, setData] = useState({selected:""})
    const availableDataSets = [
        {
            name: "Sinh viên K20",
        },
        {
            name: "Sinh viên K21",
        },
        {
            name: "Sinh viên K22",
        },       
        {
            name: "Sinh viên K23",
        },
        {
            name: "Sinh viên K24",
        },
        {
            name: "Sinh viên K25",
        }, 
        {
            name: "Toàn bộ sinh viên khoa",
        }
    ]
    const clickDownloadHanlder = (id) => {
        console.log(id);
    } 
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <p>Chọn tập dữ liệu <BsFolder2/></p>
                </header>
                <div className={classes.content}>
                    <div >
                        <div className={classes.uploadContainer}>
                            <input type="file" name="file" id="file" className={classes.inputfile} />
                            <label htmlFor="file"><BsFillFileEarmarkArrowUpFill/> Tải lên tệp mới</label>
                        </div>
                    </div>
                    <div >
                        <p className={classes.orText}>
                           -- HOẶC CHỌN TẬP DỮ LIỆU CÓ SẴN -- 
                        </p>
                    </div>
                    <div >
                        <ul>
                            {availableDataSets.map((data) => {
                                return (
                                    <li key={data.name} className="row">
                                        <p className={`col-md-8 ${classes.dataName}`}>{data.name}</p>
                                        <div className='col-md-4'>
                                            <button 
                                                className={classes.button1} 
                                                onClick = {props.onClick1}
                                                style={props.style}
                                            >
                                                Chọn
                                            </button>
                                            <button 
                                                className={classes.button2} 
                                                onClick = {clickDownloadHanlder.bind(null,data)}
                                                style={props.style}
                                            >
                                                Tải xuống
                                            </button>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm} style={{fontSize: '1rem'}}>Thoát</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ChoosingFileModal;
