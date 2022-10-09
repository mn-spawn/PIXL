import { render } from '@testing-library/react';
import React, {useState}  from 'react'
import TodoList from './TodoList';
import QRCode from 'qrcode';
import { useLocation } from 'react-router-dom'
import {data} from "./TodoList";


function ReviewState() {
  console.log({data})
  const[qrcode, setQrcode] = useState('')
  const CreateQRCode = () =>{
    QRCode.toDataURL('google.com',{
      width: 500,
      margin: 3
    },(err,url) => {
      setQrcode(url)
    })
  }
    return (
      <div>
        <h1>QR Code</h1>
        {data.map(data=> <ul>{data.text}</ul>)}
        <button onClick={CreateQRCode}><script src='url_links.js'/>Generate</button>
        <br></br>
        {qrcode && <> 
        <img src={qrcode}/>
        <br></br>     
        <a href={qrcode} download="qrcode.png"> Download</a>
        </>}
      </div>
    
    )
}

export default ReviewState