import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import "../CSS/Login.css"

const Login = () => {





    return (
        <>


            <div className="square">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="login">
                    <h2>Login</h2>
                    <div className="inputBx">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign in" />
                    </div>
                    <div className="links">
                        <Link to=""> Forget Password</Link>
                        <Link to=""> SignUp</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login