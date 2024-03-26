import React from "react"
import { Routes, Route } from "react-router-dom"
import { publicRouters } from "~/routers/index"
//style css
import "./style/main.scss"
const Main = () => {
    const [isActive, setIsActive] = React.useState()
    const value = false

    return (
        <div className="wrapper">
            <ul
                className={`${"layer"} ${
                    isActive
                        ? "animate__fadeInRight"
                        : isActive !== undefined
                        ? "animate__fadeOutRight"
                        : ""
                }`}
                style={
                    !isActive
                        ? {
                              opacity: 0,
                              visibility: "hidden",
                          }
                        : {}
                }
            >
                <div className="layer-header">
                    <h3>Thông Báo</h3>
                    <i
                        onClick={() => setIsActive(!isActive)}
                        className="fi fi-br-x"
                    ></i>
                </div>
                {!value ? (
                    <div className="notifications">
                        <span>Thông báo trống !</span>
                    </div>
                ) : (
                    <li>123</li> //render
                )}
            </ul>

            <header>
                <div className="search">
                    <label>
                        <i className="fi fi-rr-search flex"></i>
                        <input type="text" placeholder="Search products" />
                    </label>
                </div>

                <div className="account">
                    <div className="user">
                        <div
                            onClick={() => setIsActive(!isActive)}
                            className={`${"notification"} ${
                                isActive ? "active" : ""
                            }`}
                        >
                            <i className="fi fi-rs-bell"></i>
                            {value ? <span></span> : <></>}
                        </div>

                        <div className="user-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
                                alt="user Avatar"
                            />
                        </div>
                        <div className="user-name">
                            <p>Name user</p>
                        </div>
                    </div>
                </div>
            </header>
            <Routes>
                {publicRouters.map((item) => {
                    const Page = item.element
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<Page />}
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default Main
