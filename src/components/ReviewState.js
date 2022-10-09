import React, {useState}  from 'react'
import TodoList from './TodoList';
import QRCode from 'qrcode';
import {data} from "./TodoList";



function ReviewState() {
  console.log({data})

  const[qrcode, setQrcode] = useState('')
  const CreateQRCode = () =>{
    QRCode.toDataURL('http://localhost:3000/review',{
      width: 500,
      margin: 3
    },(err,url) => {
      setQrcode(url)
    })
  }
    return (
      <div>
        <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
        >
          <h1>QR Codes</h1>
        </div>
          {data.map(data=> <ul><a className="links" href={data.text} target="_blank" rel="noopener noreferrer">{data.text}</a></ul>)}
          <button className='QRCodeButton' onClick={CreateQRCode}>Generate</button>
          <br></br>
          {qrcode && <> 
          <img className="qrCodeImg"src={qrcode}/>
          <br></br>     
          <a 
          href={qrcode} download="qrcode.png"> Download</a>
          </>}
      </div>
    
    )
}

export default ReviewState