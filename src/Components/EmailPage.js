import React, { useState } from 'react'
import "../CSS/Email.css"

const EmailPage = () => {


    const [active_create_part, Set_active_create_part] = useState(true)
    const [active_send_money_part, Set_active_send_money_part] = useState(false)
    const [active_deposit_part, Set_active_deposit_part] = useState(false)

    const [send_money_email, Set_send_money_email] = useState("")

    const OnChange_email_sm = (e) => {
        Set_send_money_email(e.target.value)
    }

    const change_type_func = (e) => {
        const tag_list = document.querySelectorAll(".change_type_btns");
        const id_ = e.target.id
        tag_list.forEach(x => {
            if (x.classList.contains("active")) {
                x.classList.remove("active")
            }
        })

        if (id_ === "create") {
            Set_active_create_part(true)
            Set_active_send_money_part(false)
            Set_active_deposit_part(false)
        } else if (id_ === "send_money") {
            Set_active_create_part(false)
            Set_active_send_money_part(true)
            Set_active_deposit_part(false)
        } else if (id_ === "deposit") {
            Set_active_create_part(false)
            Set_active_send_money_part(false)
            Set_active_deposit_part(true)
        }

        e.target.classList.add("active")
    }

    const copyText = (e) => {
        const el_text = e.target.previousElementSibling.textContent;
        
        navigator.clipboard.writeText(el_text)
    }


    return (
        <section className="email_section">
            <h2 className='email_main_title'>Send Money Via Email</h2>
            <h5 className='child_desc'>Create an account and send money, by sending emails from your currently logged-in email address. Everyone starts with 100 TEST tokens on the Sepolia testnet.</h5>
            <div className="change_type">
                <div id="create" onClick={change_type_func} className="change_type_btns btn active">Create</div>
                <div id="send_money" onClick={change_type_func} className="change_type_btns btn">Send Money</div>
                <div id="deposit" onClick={change_type_func} className="change_type_btns btn"> Deposit</div>
            </div>

            {active_create_part && <div className="create_email_part">
                <h2 className='create_email_main_title'>Create Account</h2>
                <h5 className='create-email_main_desc'>Email a relayer to create an account .</h5>
                <div className="input-group">
                    <div style={{ width: "80%", display: "block" }}>
                        <input placeholder='your email' type="text" />
                        <div className="err"></div>
                    </div>
                    <button className='create_email_btn'>Create</button>
                </div>

                <p onClick={() => {

                    const tag_list = document.querySelectorAll(".change_type_btns");
                    tag_list.forEach(x => {
                        if (x.classList.contains("active")) {
                            x.classList.remove("active")
                        }
                    })
                    Set_active_create_part(false)
                    Set_active_send_money_part(true)
                    Set_active_deposit_part(false)

                    document.querySelector("#send_money").classList.add("active")
                }} className='bottom_que'>Created? Go to Send Money Tab <i className="fa fa-arrow-right"></i></p>
            </div>}

            {active_send_money_part &&
                <div className='active_send_money_part'>
                    <h2 className='send_money_main_title'>Send Money</h2>
                    <h5 className='send_money_main_desc'>Send money via sending an email through a relayer, with transaction instructions in the subject. Everyone starts with 100 TEST tokens (and 5 USDC during ProgCrypto)..</h5>
                    <div className="email_to">
                        <p>To: </p>
                        <input onChange={OnChange_email_sm} value={send_money_email} placeholder='Email Address or Wallet Address' type="text" />
                    </div>

                    <div className="cc">
                        <p>Cc: </p>
                        <h4>sepolia@sendeth.org</h4>
                        <i onClick={(e)=>{
                            copyText(e)
                        }} className="fa-solid fa-copy"></i>
                    </div>
                    <div className="amount_part">
                        <p>Subject: </p>
                        <h4 style={{ color: "white", fontSize: "large" }}>Send</h4>
                        <div className="networks_inputs">
                            <input className='amount_input' type="number" />
                            <div class="select">
                                <select>
                                    <option value="1">TEST</option>
                                    <option value="2">USDC</option>
                                    <option value="3">DAI</option>
                                </select>
                            </div>

                        </div>
                        <p style={{ fontSize: "larger", color: "white", position:"relative",left:"-3%", marginTop: "0px" }}>to</p>
                        <span className='email_or_wallet_desc'>{send_money_email !== "" ? send_money_email : "Email address or Wallet address"}</span>
                        <i onClick={(e)=>{
                            copyText(e)
                        }} style={{position:"relative",right:"2%"}} className="fa-solid fa-copy"></i>
                    </div>
                    <div className="message_text_area">
                        <textarea id="give_message" cols="30" style={{ height: "200px" }}></textarea>
                    </div>
                    <div className="bottom">
                        <button className='send_btn'>Send</button>
                    </div>
                </div>
            }

            {active_deposit_part &&
                <div className='active_deposit_part'>
                    <h2 className='deposit_main_title'>Deposit Money</h2>
                    <h5 className='deposit_main_desc'>To optionally top-up your wallet address, send additional funds directly to your address mentioned in your confirmation emails.
                    </h5>
                </div>
            }

        </section>
    )
}

export default EmailPage