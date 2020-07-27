import Link from 'next/link'
import {useState, useEffect} from 'react'
import Router from 'next/router'
import GoogleLogin from 'react-google-login'
import {loginWithGoolge, authenticate, isAuth} from '../../actions/auth'
import {GOOGLE_CLIENT_ID} from '../../config'

const LoginGoogle = () => {

    const responseGoogle = response => {
        // console.log(response);
        const tokenId = response.tokenId
        const user = {tokenId};

        loginWithGoolge(user).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        })

    };

    return <div style={{textAlign: "center"}} className="login-with-google-div">
        <GoogleLogin
            clientId={`${GOOGLE_CLIENT_ID}`}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            theme="dark"
        />,
    </div>
}

export default LoginGoogle