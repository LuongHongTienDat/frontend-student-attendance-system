import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './Check-in-out.css';

const Check_in_out = () => {
    const [value_in, setValue_in] = useState('');
    const [value_out, setValue_out] = useState('');
    const [array_in, setArray_in] = useState([]);
    const [array_out, setArray_out] = useState([]);

    const prependData_in = () => {
        const element_in = (
            <div className="item_check_in">
                <div className="name_check_in">{value_in}</div>
                <div className="confirm_check_in">Đã check-in</div>
            </div>
        )

        setArray_in( 
            preArray_in => [element_in, ...preArray_in]
        );
    }

    const prependData_out = () => {
        const element_out = (
            <div className="item_check_out">
                <div className="name_check_out">{value_out}</div>
                <div className="confirm_check_out">Đã check-out</div>
            </div>
        )
        setArray_out( 
            preArray_out => [element_out, ...preArray_out]
        );
    }

    return (
        <div id = "Check_in_out">
            <div className='title'>
                <div>
                    ĐIỂM DANH SỰ KIỆN:
                </div>
                <div>
                    NGÀY HỘI VIỆC LÀM CSE JOB FAIR
                </div>
            </div>
            <div className="container_check_in_out">                
                <Tabs defaultActiveKey="Check-in" transition={true} id="tab" className="mb-3">
                    <Tab eventKey="Check-in" title="Check-in">
                        <div className="form_check_in">
                            <div className="text_check_in">CHECK-IN</div>
                            <input onChange={e => setValue_in(e.target.value)} className="input_check_in" type="text" placeholder="Nhập mã số sinh viên..."/>
                            <div className="button_check_in">
                                <button onClick={prependData_in} type="submit" className="btn btn_submit_check_in">Nhập</button>
                            </div>
                        </div>
                        <div className="list_check_in">
                                {array_in}
                        </div>
                    </Tab>
                    <Tab eventKey="Check-out" title="Check-out">
                        <div className="form_check_out">
                            <div className="text_check_out">CHECK-OUT</div>
                            <input onChange={e => setValue_out(e.target.value)} className="input_check_out" type="text" placeholder="Nhập mã số sinh viên..."/>
                            <div className="button_check_out">
                                <button onClick={prependData_out} type="submit" className="btn btn_submit_check_out">Nhập</button>
                            </div>
                        </div>
                        <div className="list_check_out">
                                {array_out}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default Check_in_out;