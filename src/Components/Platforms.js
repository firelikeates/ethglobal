import React, { useState } from 'react'
import "../CSS/Platforms.css"
import { useWeb3Modal } from '@web3modal/wagmi/react'
const Platforms = () => {



    const click_box = (e) => {
        var div = e.target.firstElementChild.nextElementSibling
        div.innerHTML = "You must connect your wallet first!"
        setTimeout(() => {
            div.innerHTML = ""
        }, 4000)
    }
    const { open } = useWeb3Modal()
    return (
        <section className="platforms1-section">
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i className="fa-brands fa-x-twitter"></i>
                    <p>X  8.98$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i class="fa-brands fa-youtube"></i>
                    <p>Youtube 10.98$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <div className="box" onClick={click_box}>
                <div className="logo">
                    <i className="fa-brands fa-twitch"></i>
                    <p>Twitch 5.62$</p>
                </div>
                <div className='err_message'></div>
            </div>
            <button onClick={() => open()} className='connect_your_wallet'>Connect Wallet</button>
            
        </section>
    )
}

export default Platforms