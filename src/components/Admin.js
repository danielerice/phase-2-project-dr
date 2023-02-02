import React from "react";
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

const formStyle = {
    top: `20em`,
    width: `30%`,
    margin: `auto`
    
}

function loginAttempt (e) {
    e.preventDefault()

}


function Admin ({ isLoggedIn, setIsLoggedIn}) {
    
    const [users, setUsers] = useState([])

    useEffect (() => {
        fetch("http://localhost/3000/kaizen")
            .then(response => response.json())
            .then(data => console.log(data))
        }, []);


        if(isLoggedIn===true) {
    return (
    <div>
        <div className="ui form segment" style={formStyle}>
            <div className="field">
                <label>Event Date</label>
                <div className="ui left labeled icon input">
                    <input type="date" placeholder="MM/DD/YYYY"></input>
                </div>
            </div>
            <div className="field">
                <label>Event Start Time</label>
                <div className="ui left labeled icon input">
                    <input type="time" placeholder="Start Time"></input>
                </div>
            </div>
            <div className="field">
                <label>Event End Time</label>
                <div className="ui left labeled icon input">
                    <input type="time" placeholder="End Time"></input>
                </div>
            </div>
            <div className="field">
                <label>Event Title</label>
                <div className="ui left labeled input">
                    <input type="text" placeholder="Title"></input>
                </div>
            </div>
            <div className="field">
                <label>Brief Description</label>
                <textarea type="text" placeholder="Description"></textarea>
            </div>
            <div className="ui submit button">Submit</div>
        </div>
    </div>
    )
        } else {
            return (
                <div>
                    <div className="ui  form segment">
                        <div className="field">
                            <label>Username</label>
                            <div className="ui left labeled icon input">
                                <input type="text" placeholder="Username"/>
                                <i className="user icon"></i>
                                <div className="ui corner label">
                                    <i className="icon asterisk"></i>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="ui left labeled icon input">
                                <input type="password" placeholder="Password"/>
                                <i className="lock icon"></i>
                                <div className="ui corner label">
                                    <i className="icon asterisk"></i>
                                </div>
                            </div>
                        </div>
                        <div className="ui error message">
                            <div className="header">We noticed some issues</div>
                        </div>
                        <div className="ui blue submit button">Login</div>
                    </div>
                </div>
            )
        }
}

export default Admin;