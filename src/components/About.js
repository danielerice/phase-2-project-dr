import React from "react";
import { Container } from "semantic-ui-react";

const aboutStyle= {marginTop: `20em`}

function About () {
    return (
        <Container className="ui center aligned container" style={aboutStyle} >
        <div className=" ui huge header">About</div>
        </Container>
    );
}

export default About;