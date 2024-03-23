import { Container } from "react-bootstrap"
import React from 'react';
import { useParams } from "react-router-dom";


interface Index{
    id : number;
}
const Index : React.FC =  () => {

     const abc = useParams()
     console.log(abc)
    return (
        <Container>
            <h1>hello world</h1>
        </Container>
    )
}

export default Index


