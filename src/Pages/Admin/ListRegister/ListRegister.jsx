import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ListRegister.css'
import dataset from './data.json'
import PageSwitcher from '../pageSwitcher/PageSwitcher'
import { DetailBtn, EventDetail } from './../detailBtn/DetailBtn'

function AccountApproval() {
    // only change the 'isAccept' value of real data
    const [data, setData] = useState(dataset);
    // whenever acp or decline remove the 'display' data from sceen
    let [display, setDisplay] = useState(dataset);

    const handleAccept = (e, acp) => {
        setDisplay(display.filter((t) => t !== e));
        e.isAccept = acp === "acp" ? "true" : "false";
        setData(data);
    }

    return (
        <div className="bigContainer" id="ADMIN-PAGE">
            <PageSwitcher page="listRegister" />
            <h2>DANH SÁCH ĐĂNG KÝ</h2>
            <div className="container my-5" id="LIST-REGISTER">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="col-1">STT</th>
                            <th className="col-3">Tên sự kiện</th>
                            <th className="col-3 text-center">Thời gian đăng ký</th>
                            <th className="col-2"></th>
                            <th className="col-4"></th>
                        </tr>
                    </thead>
                    <TransitionGroup component="tbody">
                        {/* <tbody> */}
                            {display.map((e, index) => (
                                <CSSTransition key={index} timeout={500} classNames="infoRow">
                                    <tr>
                                        <th className="col-1 align-middle">{index + 1}</th>
                                        <td className="col-3 align-middle">{e.eventName}</td>
                                        <td className="col-3 align-middle text-center">{e.time}</td>
                                        <td className="col-2 text-end align-middle">
                                            <DetailBtn />
                                            <EventDetail data={e} />
                                        </td>
                                        <td className="col-4">
                                            <div className="button-group text-end">
                                                <button type="button"
                                                    className="accept"
                                                    onClick={handleAccept.bind(this, e, "acp")}>
                                                    Đồng ý
                                                </button>
                                                <button type="button"
                                                    className="decline"
                                                    onClick={handleAccept.bind(this, e, "dcn")}>
                                                    Từ chối
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                </CSSTransition>
                            ))}
                        {/* </tbody> */}
                    </TransitionGroup>
                </table>
            </div>
        </div>
    );
}

export default AccountApproval;