import React from 'react'
import { useHistory } from "react-router-dom";

const Contact = () => {
    const  history = useHistory()
    return (
        <div className="contact">
          <h1>
             <span> Name</span> : Mohit Rathore <br />
             <span> phone</span>  : 8447424019 <br />
              <span> Email</span>: hackside715@gmail.com
          </h1>
          <button onClick = {()=>{history.push("/")}} className="persnal"> Go back</button>
        </div>
    )
}

export default Contact
