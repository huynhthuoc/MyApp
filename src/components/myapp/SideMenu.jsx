import React from "react"
import { Link } from "react-router-dom"
//components

//style css
import "./style/sideMenu.scss"

//initValue
import { dataSideMenu } from "./dataSideMenu"
const SideMenu = () => {
    const [path, setPath] = React.useState(window.location.pathname)
    return (
        <div className="sidemenu">
            <div className="logo flex">
                <i className="fi fi-brands-wepik"></i>
                <h2>STORAGE</h2>
            </div>

            <ul>
                {dataSideMenu.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={`${
                                item.className && item.className
                            } animate__lightSpeedInLeft`}
                            onClick={() => setPath(window.location.pathname)}
                        >
                            <Link
                                className={path === item.path ? "active" : ""}
                                to={item.path}
                            >
                                <i className={item.icon}></i>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideMenu
