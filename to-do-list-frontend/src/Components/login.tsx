import React, { useRef } from "react";

interface login_data {
    email : string|undefined;
    password : string|undefined;
}

const Login: React.FC = ()=> {
    document.title="Login"
    const email =useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    
    const login= async (data:login_data) =>{
        
    }

    return <div className="container" >
        <form onSubmit={(e: React.FormEvent) => {
            e.preventDefault()
            const user_data: login_data = {
                email: email.current?.value,
                password: password.current?.value,
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