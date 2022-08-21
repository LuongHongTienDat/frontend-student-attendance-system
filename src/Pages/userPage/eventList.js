import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sideBar'
import './eventList.css';

function CreateRow(props) {
    const event = props.event;
    const eventStatus = {
        inc: "Sap dien ra",
        hpn: "Dang dien ra",
        end: "Ket thuc"
    }

    return (
        <tr>
            <th className={`col-1 ${event.st}`}>{props.ind}</th>
            <td className={`col-5 ${event.st}`}>{event.eventName}</td>
            <td className={`col-3 ${event.st}`}>{event.time}</td>
            <td className={`col-3 ${event.st}`}>{eventStatus[event.st]}</td>
        </tr>
    );
}

function UserEventList(props) {
    const [data, setData] = useState({
        old_FullName: props.data.FullName,
        FullName: props.data.FullName,
        submitted: false,
        events: props.data.events,
    })

    const numOfEvents = data.events.length;
    const trList = [];
    for (let i = 1; i <= numOfEvents; i++) {
        trList.push(<CreateRow ind={i} event={data.events[i - 1]} key={i} />);
    }


    return (
        <div className="page">
            <div className="container fr">
                <div className="row">
                    <SideBar formdata={data} tab={1} />
                    <div className="col-8">
                        <h4 className="tab__event text-center">Sự kiện</h4>
                        <div className="border">
                            <div className="mini-container">
                                <h6 className="table-name">Các sự kiện đã đăng ký</h6>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="col-1">STT</th>
                                            <th className="col-5">Tên sự kiện</th>
                                            <th className="col-3" >Thời gian</th>
                                            <th className="col-3">Trạng Thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>{trList}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default UserEventList;
