import React, {useState} from 'react';

export default function Login () {
    const [username, setUsername] = useState("")
    const [pw, setPw] = useState("")
    const [result, setResult] = useState("")
    const login = () => {
        let username = document.getElementById('username').value
        let pw = document.getElementById('pw').value
        setUsername(username)
        setPw(pw)
        setResult("username : " + username + ", " + "pw : " + pw)
    }
    return (<>
        <h1>로그인 폼</h1>
        <div>
            <label><b>Username</b></label> <br/>
            <input id="username"/> <br />
            <label><b>Password</b></label> <br/>
            <input id="pw"/> <br/>
            <button onClick={() => {login()}}>Login</button> <br/>
            <label>
                <input type="checkbox"/> Remember me
            </label>
        </div>
        <div>
            <button>Cancel</button>
            <span>Forgot <a>password?</a></span>
        </div>
        <div>{result}</div>
    </>)
}