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
          {
          data.map(data=> <ul className="links"><a className="link" href={data.text} target="_blank" rel="noopener noreferrer">{data.text}</a></ul>)}
          
          
          <button className='QRCodeButton' onClick={CreateQRCode}>Generate</button>
          <br></br>
          <div>
            {qrcode && <> 
            <img className="qrCodeImg"src={qrcode}/>
              <br></br>
              <button className="review">
                <a href={qrcode} download="qrcode.png"> Download</a>
              </button>     
            
              </>}
            </div>
      </div>
    
    )
}

export default ReviewState