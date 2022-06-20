import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './DataManage.css'
import dataset from './data.json'
import PageSwitcher from './../pageSwitcher/PageSwitcher'

function DataManage() {
    const [data, setData] = useState(dataset);
// ------------ <3 -----------
    const newFile = {
        fileName: "new-file.hihi",
        uploadTime: new Date().toLocaleDateString()
    }

    const handleAdd = (e) => {
        setData(
            prev => ([
                ...prev,
                e
            ])
        );
    }
// ------------ <3 -----------
    const handleRemove = (e) => {
        setData(data.filter((t) => t !== e));
    }

    const handleEdit = (e) => {
        e.fileName = prompt("Enter new file name?");
        setData(data);
    }

    const handleDownload = (e) => {
        window.location.href = e.linkto;
    }

// ------------ <3 -----------

    return (
        <div className="bigContainer" id="ADMIN-PAGE">
            <PageSwitcher page="dataManage" />
            <h2>QUẢN LÝ TẬP TIN</h2>

            <div className="container my-5" id="DATA-MANAGE">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="col-1">STT</th>
                            <th className="col-5">Tập dữ liệu</th>
                            <th className="col-3">Thời gian tải lên</th>
                            <th className="col-3 text-end">
                                <input type="image"
                                    src=".././add-btn.png"
                                    width="90"
                                    className="align-middle"
                                    onClick={handleAdd.bind(this, newFile)}
                                />
                            </th>
                        </tr>
                    </thead>
                    <TransitionGroup component="tbody">
                        {data.map((e, index) =>
                            <CSSTransition key={index} timeout={500} classNames="infoRow">
                                <tr>
                                    <th className="col-1 align-middle">{index + 1}</th>
                                    <td className="col-5 align-middle">{e.fileName}</td>
                                    <td className="col-3 align-middle">{e.uploadTime}</td>
                                    <td className="col-3">
                                        <div className="button-group text-end">
                                            <input type="image"
                                                src=".././download.png"
                                                width="30"
                                                className="align-middle"
                                                onClick={handleDownload.bind(this, e)}
                                            />

                                            <input type="image"
                                                src=".././edit.png"
                                                width="30"
                                                className="align-middle"
                                                onClick={handleEdit.bind(this, e)}
                                            />

                                            <input type="image"
                                                src=".././remove.png"
                                                width="30"
                                                className="align-middle"
                                                onClick={handleRemove.bind(this, e)}>
                                            </input>
                                        </div>
                                    </td>
                                </tr>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </table>
            </div>
        </div>
    );
}

export default DataManage;