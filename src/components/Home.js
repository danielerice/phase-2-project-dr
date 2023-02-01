import React from "react";
import { Container } from "semantic-ui-react";

const homeStyle = { marginTop: `20em` }

function Home () {
    console.log('home')
    return (
    <div>
        <Container className="ui center aligned container" style={homeStyle} >
            <div className=" ui huge header">Welcome to Kaizen Ramen!!</div>
        </Container>
    </div>
    );
}

export default Home;