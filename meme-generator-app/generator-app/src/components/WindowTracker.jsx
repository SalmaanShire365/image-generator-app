/* eslint-disable no-unused-vars */
import React from 'react'

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)



    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        
        return function () {
            console.log("Cleaning..")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <div>

            <h1>Window width:{windowWidth}</h1>
        </div>
    )

}