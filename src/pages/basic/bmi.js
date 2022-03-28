import React, {useState} from "react";

export default function Bmi () {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [bmi, setBmi] = useState(0.0)
    const [result, setResult] = useState("")
    const getBmi = () => {
        let username = document.getElementById('username').value
        console.log('username : ' + username)
        let height = document.getElementById('height').value
        console.log('height : ' + height)
        let weight = document.getElementById('weight').value
        console.log('weight : ' + weight)
        setUsername(username)
        setHeight(height)
        setWeight(weight)
        setBmi(Number(weight) / (Number(height) * Number(height)) * 10000)
        if (bmi >= 35) {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 고도비만")}
        else if (bmi >= 30) {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 중도비만")}
        else if (bmi >= 25) {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 경도비만")}
        else if (bmi >= 23) {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 과체중")}
        else if (bmi >= 18.5) {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 정상")}
        else {setResult(username + "의 키 : " + Number(height) + ", 몸무게 : " + Number(weight) + ", 저체중")}
    }
    return (<>
    <h1>Bmi</h1>
        <div>
            <label><b>이름</b></label> <br/>
            <input id="username"/> <br/>
            <label><b>키</b></label> <br/>
            <input id="height"/> <br/>
            <label><b>몸무게</b></label> <br/>
            <input id="weight"/>
        </div>
        <div>
            <button onClick={() => {getBmi()}}>Bmi 지수 계산하기</button>
            <div>{result}</div>
            <button>취소</button>
        </div>
    </>)
}