import React, { useState } from 'react'
import "../CSS/Platforms.css"

const Platforms = () => {



    const click_box = (e) => {
        var div = e.target.firstElementChild.nextElementSibling
        div.innerHTML = "You must connect your wallet first!"
        setTimeout(() => {
            div.innerHTML = ""
        }, 4000)
    }

    return (
        <section className="platforms1-section">
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i className="fa-brands fa-x-twitter"></i>
                    <p>X  8.98$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <p>&nbsp;</p>
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i class="fa-brands fa-youtube"></i>
                    <p>Youtube 10.98$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <p>&nbsp;</p>
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i className="fa-brands fa-twitch"></i>
                    <p>Twitch 5.62$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <p>&nbsp;</p>
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i class="fa-brands fa-twitch"></i>
                    <p>Youtube 10.98$</p>
                </div>
                <div className='err_message'></div>
            </div>

        </section>
    )
}

export default Platforms