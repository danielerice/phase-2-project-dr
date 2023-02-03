import React from "react";
import { Container, Form } from "semantic-ui-react";

const aboutStyle= {marginTop: `20em`}

function About () {
    return (
        <div>
        <Form className="ui submit form"></Form>
        <Container className="ui center aligned container" style={aboutStyle} >
        <div className=" ui huge header">About</div>
        </Container>
        </div>
    );
}

export default About;