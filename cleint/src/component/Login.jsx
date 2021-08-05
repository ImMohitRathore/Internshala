
import React, { useState } from 'react'
import  "./style.css"
import { useHistory ,Link} from "react-router-dom"
import logo from "./images/undraw_secure_login_pdn4.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email , setemail]  =useState('')
    const [password , setpassword] = useState('')

    const history = useHistory();


   

    const Login_data = async(e)=>{
        e.preventDefault();
        const res = await fetch("/login",{
            method : "post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({  email , password  })
        })
        const data = await res.json()
        if(res.status ===400 || !data){
          
            toast.warn("please filled properly",{
                position:"top-center"
            });
            console.log("plz filled")
        }else{
            
            toast.success(" login sucsessful",{
                position:"top-center"
            });
            setTimeout(() => {  
                history.push("/home")
            }, 3000);

            
            
        }
     }
    
    return (
        <>

             <div className="main">
              <div className="card">
                  <div className="left">

                  <img className="rslogo" src={logo} alt="" />
                     
                  </div>
                  <div className="right">
                  <div className="head">
                    <h3>Sign In</h3>
                </div>
                  <form   method = "POST" >
                       <div className="form-group">
                      
                       <input type="text"  placeholder= "Enter your Email" value={email} onChange={(e)=>setemail(e.target.value)} />
                       <br />
                     
                       <input type="password"  placeholder= "Your Password"  value = {password} onChange={(e)=>setpassword(e.target.value)} />
                       <button className="btn" onClick={Login_data}>Login</button>
                     
                       </div>
                           </form>
                  </div>
              </div>
          </div>
          <ToastContainer />
        </>
    )
}

export default Login
