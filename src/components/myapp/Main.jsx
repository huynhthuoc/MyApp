import React from "react"
import Contents from "./Contents"

//style css

import "./style/main.scss"
const Main = () => {
    const x = true
    return (
        <div className="wrapper">
            <header>
                <div className="search">
                    <label>
                        <i className="fi fi-rr-search"></i>
                        <input type="text" placeholder="Search project..." />
                    </label>
                </div>

                <div className="account">
                    <div className="user">
                        <div className="notification">
                            <i className="bx bx-bell"></i>
                            {x ? (
                                <div className="totalnotofication">
                                    <p>5</p>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="user-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
                                alt="1"
                            />
                        </div>
                        <div className="user-name">
                            <p>Huynh Thuoc</p>
                        </div>
                    </div>

                    <div className="theme">
                        {/* <i className="bx bx-sun"></i> */}
                        <i className="bx bx-moon"></i>
                    </div>
                </div>
            </header>
            <Contents />
        </div>
    )
}

export default Main
