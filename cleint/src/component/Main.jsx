import React from 'react'
import img from "../component/images/undraw_feeling_proud_qne1.svg"
import "./Main.css"
import { useHistory } from "react-router-dom";

const Main = () => {
    const  history = useHistory()
    return (
        <div>
           <div className="container">
               <div className="lefft">
               <img src={img} alt="" />
               <h1>Hello I'm <span className="change_content"></span></h1>
               <div className="circle"></div>
               </div>
               <div className="righht">
                    <h1>Welcome</h1>
                    
                    <p>Thanks <span>Tache Technologies Private Limited </span> to giving me a greatful opportunity .I am very glad to complete this project <br />
                    In this project i have make todo list with login and logout features <br />
                     I have use latest technology like  <span>mongodb atlas, Express, React, Node</span> <br />
                     I have use <span>MongoDB altas</span> as database for store Login ID and password
                    </p>
                    <button  onClick={()=>{  history.push("/login")}} id="to_login">Get Started</button>
                    <button onClick={()=>{
                        history.push("/contact")
                    }} id="contact_btn">Contact us</button>
               </div>

           </div>
        </div>
    )
}

export default Main
