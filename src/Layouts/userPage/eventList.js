import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sideBar'
import './eventList.css';
import { render } from 'react-dom';

function CreateRow(props) {
    return (
        <tr>
            <th className="col-1">{props.ind}</th>
            <td className="col-5">{props.event.eventName}</td>
            <td className="col-3">{props.event.time}</td>
            <td className="col-3">{props.event.st}</td>
        </tr>
    );
}

class UserEventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_FullName: props.data.FullName,
            FullName: props.data.FullName,
            submitted: false,
            events: props.data.events,
        };
    }

    render() {
        const numOfEvents = this.state.events.length;
        const trList = [];
        for (let i = 1; i <= numOfEvents; i++) {
            trList.push(<CreateRow ind={i} event={this.state.events[i - 1]} key={i} />);
        }

        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <SideBar formdata={this.state} tab={1} />
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
}

export default UserEventList;
