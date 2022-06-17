import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './AccountApproval.css'
import dataset from './user_data.json'
import PageSwitcher from '../pageSwitcher/PageSwitcher'
import { DetailBtn, UserDetail } from './../detailBtn/DetailBtn'

function AccountApproval() {
    const [data, setData] = useState(dataset);
    const [display, setDisplay] = useState(dataset);
    // useEffect(() => {
    //     setData(dataset);
    // }, []);

    const handleAccept = (e, acp) => {
        setDisplay(display.filter((t) => t !== e));
        e.isAccept = acp === "acp" ? "true" : "false";
        setData(data);
        console.log(data);
    }

    return (
        <div className="bigContainer" id="ADMIN-PAGE">
            <PageSwitcher page="accountApproval" />
            <h2>KIỂM DUYỆT TÀI KHOẢN</h2>

            <div className="container my-5" id="ACCOUNT-APPROVAL">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="col-1">STT</th>
                            <th className="col-2">MSSV</th>
                            <th className="col-3">Họ và tên</th>
                            <th className="col-2"></th>
                            <th className="col-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {display.map((e, index) =>
                            <tr key={index}>
                                <th className="col-1 align-middle">{index + 1}</th>
                                <td className="col-2 align-middle">{e.StudentID}</td>
                                <td className="col-3 align-middle">{e.FullName}</td>
                                <td className="col-2 text-center align-middle">
                                    <DetailBtn />
                                    <UserDetail data={e} page="aA" />
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
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountApproval;