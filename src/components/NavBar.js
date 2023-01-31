import React from "react";
import { Link } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";


function NavBar () {
    return (
    <div class="ui inverted top fixed menu">
        <Segment inverted>
        <Button inverted color='red' as={Link} to='/'>
            Home
        </Button>
        <Button inverted color='red' as={Link} to='/about'>
            About
        </Button>
        <Button inverted color='red' as={Link} to='/admin'>
            Admin
        </Button>
        <Button inverted color='red' as={Link} to='/menu'>
            Menu
        </Button>
        </Segment>
    </div>
    );
}

export default NavBar;