import React from 'react';
import { Card,Form,Container,Button } from 'react-bootstrap';
import type { credentials } from '../context/dataType';
import {login} from "../context/api"
import { userProifeAtom } from '../context/atom';
import { useSetAtom } from 'jotai';
import {useState} from "react"


const Login : React.FC = ()=>{
    document.title = "Login"
    const setAtom =useSetAtom(userProifeAtom)
    const emailRef= React.useRef<HTMLInputElement>(null)
    const passwordRef= React.useRef<HTMLInputElement>(null)
    const [error,setError] = useState()


    const submit = (event: React.SyntheticEvent) =>{
        event.preventDefault();
        const credential :credentials = {
            email:emailRef.current?.value,
            password:passwordRef.current?.value
        }
        login(credential).then((res) => {
            setAtom(res)
        }).catch((err) => {
            setError(err)
        })
        if (error){
            console.log(error)
        }   
    }

    return <>
        <Container className=" align-items-center justify-content-center" style={{minHeight: "100 vh", maxHeight:"80%"}}>
            <div className="w-100" style={{maxWidth: "400px", maxHeight:"80%"}}>
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={submit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100'>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </Container>
    </>
}

export default Login