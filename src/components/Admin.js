import React from "react";
import { useEffect, useState } from "react";
import { Form, Header } from "semantic-ui-react";

const formStyle = {
    top: `20em`,
    width: `30%`,
    margin: `auto`
    
}



function Admin ({ isLoggedIn, setIsLoggedIn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventStart, setEventStart] = useState("")
    const [eventEnd, setEventEnd] = useState("")
    const [eventTitle, setEventTitle] = useState("")
    const [eventDescription, setEventDesciption] = useState("")
    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])

    function handleLogin(event) {
        const id = (users.length+1)
        const userData = {
            "id": id,
            "username": `${username}`,
            "password": `${password}`
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
      }

      function handleEvent(event) {
        const id = (events.length+1)
        const eventData = {
            "id": id,
            "title": `${eventTitle}`,
            "description": `${eventDescription}`,
            "start": `${eventStart}`,
            "end": `${eventEnd}`,
            "date": `${eventDate}`
          }
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
          });
      }
    
    useEffect (() => {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => setUsers(data))
        }, []);

    useEffect (() => {
        fetch("http://localhost:3000/events")
            .then(response => response.json())
            .then(data => setEvents(data))
        }, []);


        if(isLoggedIn===true) {
    return (
    <div >
        <Header className="ui huge header">Create Event</Header>
        <form className="ui form segment" style={formStyle} onSubmit={handleEvent}>
            <div className="field">
                <label>Event Date</label>
                <div className="ui left labeled icon input">
                    <input type="date" placeholder="MM/DD/YYYY" onChange={(e) => setEventDate(e.target.value)}></input>
                </div>
            </div>
            <div className="field">
                <label>Event Start Time</label>
                <div className="ui left labeled icon input">
                    <input type="time" placeholder="Start Time" onChange={(e) => setEventStart(e.target.value)}></input>
                </div>
            </div>
            <div className="field">
                <label>Event End Time</label>
                <div className="ui left labeled icon input">
                    <input type="time" placeholder="End Time" onChange={(e) => setEventEnd(e.target.value)}></input>
                </div>
            </div>
            <div className="field">
                <label>Event Title</label>
                <div className="ui left labeled input">
                    <input type="text" placeholder="Title" onChange={(e) => setEventTitle(e.target.value)}></input>
                </div>
            </div>
            <div className="field">
                <label>Brief Description</label>
                <textarea type="text" placeholder="Description" onChange={(e) => setEventDesciption(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
        } else {
            return (
                <div>
                    <form className="ui form segment"onSubmit={handleLogin} style={formStyle}>
                        <div className="field">
                            <label>Username</label>
                            <div className="ui left labeled icon input">
                                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                                <i className="user icon"></i>
                                <div className="ui corner label">
                                    <i className="icon asterisk"></i>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="ui left labeled icon input">
                                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                <i className="lock icon"></i>
                                <div className="ui corner label">
                                    <i className="icon asterisk"></i>
                                </div>
                            </div>
                        </div>
                        <div className="ui error message">
                            <div className="header">We noticed some issues</div>
                        </div>
                        <input type="submit" value="Sign Up"/>
                    </form>
                </div>
            )
        }
}

export default Admin;