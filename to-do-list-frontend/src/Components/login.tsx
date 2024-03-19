import React, { useRef, useState } from "react";
import axios from "axios"

interface login_data {
    Email : string|undefined;
    Password : string|undefined;
}

const Login: React.FC = ()=> {
    document.title="Login"
    const email =useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [response,set_response]=useState(null)
    
    const login = async (data:login_data) =>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}auth/login/`,data)
            await set_response(response.data)
         
        }catch(e:any){
            if (e.response?.status === 400){
                console.log(e.response.data)
            }
        }
    }
    return <div className="container" >
        <form onSubmit={(e: React.FormEvent) => {
            e.preventDefault()
            const user_data: login_data = {
                Email: email.current?.value,
                Password: password.current?.value,
            }
            if(user_data.Email && user_data.Password) {
                login(user_data)
                console.log(response)
            }
            
        }
}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email_input"placeholder="enter your email here
                " className="form-control" ref={email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" id="password_input" placeholder="enter your password here
                " className="form-control" ref={password} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-inpput" name="checkbox" />
                <label htmlFor="checkbox">Remeber me</label>
            </div>
            <button type="submit" className="btn btn-secondary">Login</button>
        </form>
    </div>

}
export default Login