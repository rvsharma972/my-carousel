import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import './style.css';
import logo from '../../logo.svg'

const Topbar = () => {
    const history = useHistory();
    const routeParams = useParams();
    const [loginStatus,setLoginStatus] = useState(false);
    
    useEffect(() => {
        if(localStorage.getItem('user-login')) setLoginStatus(true);
    },[]);

    useEffect(() => {
        if(localStorage.getItem('user-login')) {
            setLoginStatus(true);
        } else {
            setLoginStatus(false);
        }
    },[routeParams]);

    const loginAction = () => {
        history.push('/login');
    }
    
    const logoutAction = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className='topbar'>
            <img className='company-logo' src={logo} alt="company-logo" />
            {!loginStatus ? <div className='login-button' onClick={loginAction}>Login</div> :
            <div className='login-button' onClick={logoutAction}>Logout</div>} 
        </div>
    );
}

export default Topbar;