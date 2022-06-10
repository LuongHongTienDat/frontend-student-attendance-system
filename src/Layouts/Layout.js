
// i don't know why but dùng header nào thì import header đó thôi 
// và comment cái (header) kia, vì khi import cùng lúc 2 header tui thấy bị lỗi
import React from 'react'
import Header from './Header'
// import Header_0 from './header_0/Header_0'

import Footer from './Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Layout;