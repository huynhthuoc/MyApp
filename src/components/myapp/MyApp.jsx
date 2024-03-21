import React from "react"
import "animate.css"

//components
import SideMenu from "./SideMenu"
import Main from "./Main"

//style css
import "./style/base.scss"

const MyApp = () => {
    return (
        <div className="myapp">
            <div className="container">
                <SideMenu />
                <Main />
            </div>
        </div>
    )
}

export default MyApp
