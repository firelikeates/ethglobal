import React, { useEffect } from 'react'
import {connect} from "react-redux"
import "../CSS/Header.css"
import { Link,NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Store from '../Store/Store'
import { set_active_link } from '../Action/Action'

const Header = (props) => {



    useEffect(()=>{
        let list = document.querySelector(".middle-xs9").children
        list[props.active_link].classList="header_links_active"


    },[props.active_link])

    const click_link_func = (e)=>{

        let list = document.querySelector(".middle-xs9").children
        for(let i =0;i<list .length;i++ ){
            if(list[i]===e.target){
                Store.dispatch(set_active_link(i))
            }
        }
        

        document.querySelectorAll(".header_links").forEach((i)=>{
            if(i.classList.contains("header_links_active")){
                i.classList.remove("header_links_active")
            }

        })


    }


    return (
        <>
            <header>
                <nav>
                    <div className="left-xs9">
                        <p>YTU Blockchain</p>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="middle-xs9">
                        <NavLink onClick={click_link_func} className="header_links" to="/"> HomePage</NavLink>
                        <NavLink onClick={click_link_func} className="header_links" to="/platforms"> Platforms</NavLink>
                        <NavLink onClick={click_link_func} className="header_links" to={"/about"}> About us</NavLink>
                    </div>
                    <Link onClick={()=>{

                    }} className='wallet_header_link'> Connect Wallet</Link>

                    <div onClick={() => {
                        document.querySelector(".hamburger").classList.toggle("hamburger_active")
                        document.querySelector(".hidden-list").classList.toggle("hidden-list_active")

                    }} className="hamburger">
                        <span></span>
                        <span className='second'></span>
                        <span></span>
                    </div>
                </nav>
            </header>
            <ul className="hidden-list">
                <li style={{ marginTop: "30%" }}><Link to="/"> HomePage</Link></li>
                <li><Link  to="/platforms"> Platforms</Link></li>
                <li><Link> About us</Link></li>
                <li><Link> Wallet</Link></li>

            </ul>
        </>
    )
}

const MapStateToProps = (state)=>{
    return{
        active_link:state.project_reducer.active_link
    }
}

export default connect(MapStateToProps)(Header)