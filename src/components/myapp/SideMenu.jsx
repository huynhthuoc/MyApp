import React from "react"
import { Link } from "react-router-dom"
//components

//style css
import "./style/sideMenu.scss"
import logo from "./videosIcons/logo.mp4"

//initValue
import { dataSideMenu } from "./dataSideMenu"
const SideMenu = () => {
    const [isActive, setIsActive] = React.useState(0)
    const refIconIcon = React.useRef(null)
    const refIconIconOld = React.useRef(null)

    function handleClick(id) {
        if (isActive !== id) {
            setIsActive(id)
            refIconIconOld.current = refIconIcon.current
        }
    }

    React.useEffect(() => {
        refIconIcon.current.play()
        return () => {
            if (refIconIconOld.current) {
                refIconIconOld.current.pause()
            }
        }
    }, [isActive])

    return (
        <div className="sidemenu">
            <div className="logo">
                <video autoPlay muted loop src={logo}></video>
                <h2>STORE</h2>
            </div>

            <ul>
                {dataSideMenu.map((item) => (
                    <li key={item.id}>
                        <Link
                            onClick={() => handleClick(item.id)}
                            className={isActive === item.id ? "active" : ""}
                            to={item.path}
                        >
                            <video
                                ref={isActive === item.id ? refIconIcon : null}
                                muted
                                loop
                                src={item.icon}
                            ></video>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideMenu
