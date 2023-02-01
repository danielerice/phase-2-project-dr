import React from "react";
import { Link } from "react-router-dom";
import { Button, Segment, Icon } from "semantic-ui-react";

const loginButtonStyle = { 
marginLeft: `auto`,
marginRight: `3px`,
marginTop: `3px`,
marginBottom: `auto`

}

const buttonStyle = {
    marginBottom: `auto`,
    marginTop: `auto`,
    marginLeft: `auto`,
    marginRight: `auto`

}

function NavBar ({isLoggedIn}) {
    return (
    <div className="ui top fixed menu">
        
        <Button className="ui red button" as={Link} to='/' style={buttonStyle}>
            Home
        </Button>
        <Button className="ui red button" as={Link} to='/menu' style={buttonStyle}>
            Menu
        </Button>
        <Button className="ui red button" as={Link} to='/about' style={buttonStyle}>
            About
        </Button>
        <Button className="ui tiny icon button" as={Link} to='/admin' color={isLoggedIn? `green` : `grey` } style={loginButtonStyle}>
            <Icon className="ui user icon"></Icon>
        </Button>
    </div>
    );
}

export default NavBar;