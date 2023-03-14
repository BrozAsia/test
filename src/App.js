import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from "react";
import axios from 'axios'
axios.defaults.withCredentials = true;
function App() {


  function testaxios(){
    console.log("test")
    
  const Signin = {
    id: 'test',
    password: '1234',
};
  const url='https://vroz.cc/api/signin'
  
  axios.post(url, Signin,{withCredentials:true})
  .then(response => {
    console.log(response); // 서버에서 반환한 데이터 출력
  })
  .catch(error => {
    console.error(error);
  });
}
  useEffect(()=>{
    testaxios()
  },[])


  return (
    <div className="App">
      

    </div>
  );
}

export default App;
