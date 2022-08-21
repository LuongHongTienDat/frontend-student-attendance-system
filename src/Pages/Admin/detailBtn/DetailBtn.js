import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './detailBtn.css'

function DetailBtn(props) {
    return (
            <button type="button"
                className="btn detail"
                data-bs-toggle="modal"
                data-bs-target="#detailButt">
                Chi tiết
        </button>
    )
}

function EventDetail(props) {
    const data = props.data;

    return (
        <div className="modal fade"
            id="detailButt"
            tabIndex="-1"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Chi tiết sự kiện</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">Tên sự kiện: {data.eventName}</div>
                    <div className="modal-body">Thời gian diễn ra: {data.time}</div>
                    <div className="modal-body">Người đăng ký: {data.userName}</div>
                    <div className="modal-body">Thời gian đăng ký: {data.time}</div>
                    <div className="modal-body">Trạng thái: {data.isAccepted === "true" ?
                        "Đã duyệt" : "Không duyệt"}</div>
                </div>
            </div>
        </div>
    )
}

function UserDetail(props) {
    return (
        <div className="modal fade"
            id="detailButt"
            tabIndex="-1"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Chi tiết tài khoản</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">Họ và tên: {props.data.FullName}</div>
                    <div className="modal-body">Ngày sinh: {props.data.DoB}</div>
                    <div className="modal-body">Mã số sinh viên: {props.data.StudentID}</div>
                    <div className="modal-body">Email: {props.data.Email}</div>
                    <div className="modal-body">Số điện thoại: {props.data.PhoneNum}</div>
                </div>
            </div>
        </div>
    )
}



export { DetailBtn, EventDetail, UserDetail };