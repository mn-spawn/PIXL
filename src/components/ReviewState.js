import React, {useState} from 'react'
import QRCode from 'qrcode';
// import './src/App.css';

function ReviewState({parentToChild}) {

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
                <h1>This is review state</h1>
                {parentToChild}
                <button onClick={CreateQRCode}>Generate</button>
                <br></br>
                {qrcode && <React.Fragment> 
                    <img src={qrcode}/>
                    <br></br>     
                    <a href={qrcode} download="qrcode.png"> Download</a>
                </React.Fragment>}
            </div>
          )
}

export default ReviewState