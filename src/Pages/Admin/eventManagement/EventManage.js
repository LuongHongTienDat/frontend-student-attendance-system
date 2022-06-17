import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './EventManage.css'
import data from './data.json'
import PageSwitcher from './../pageSwitcher/PageSwitcher'
import {DetailBtn, EventDetail} from './../detailBtn/DetailBtn'

function EventManage() {
    const [event, setEvent] = useState(data);
    // useEffect(() => {
    //     setEvent(data);
    // }, []);

    return (
        <div className="bigContainer" id="ADMIN-PAGE">
            <PageSwitcher page="eventManage" />
            <h2>QUẢN LÝ SỰ KIỆN</h2>

            <div className="container my-5" id="EVENT-MANAGE">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="col-1">STT</th>
                            <th className="col-4">Tên sự kiện</th>
                            <th className="col-3">Thời gian đăng ký</th>
                            <th className="col-2"></th>
                            <th className="col-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {event.map((e, index) =>
                            <tr key={index}
                                className={e.isAccepted === "true" ? "" : "declined"}>
                                <th className="col-1">{index}</th>
                                <td className="col-4">{e.eventName}</td>
                                <td className="col-3">{e.time}</td>
                                <td className="col-2">
                                    <DetailBtn data={e} />
                                    <EventDetail data={e} page="eM"/>
                                </td>
                                <td className="col-2">
                                    {event.isAccepted === "true" ?
                                        "Đã duyệt" : "Không duyệt"}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EventManage;