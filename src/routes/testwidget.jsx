//import { useState, useEffect } from 'react'
import './widget.css'
//import ComfyJS from 'comfy.js'
//import { useLocation } from "react-router-dom"
import anime from 'animejs'

function Widget() {
    //const param = useLocation().search;
    //const username = new URLSearchParams(param).get('user');
    // URL should look like "https://widget.bruh.ninja/widget?user={username}" 

    //const [messages, setMessages] = useState([]);

    //useEffect(() => {
    //    ComfyJS.Init(username);
    //    ComfyJS.onChat = (user, message, flags, self, extra) => {
    //        const newMessage = { user, message, flags, self, extra };
    //        setMessages((prevMessages) => [...prevMessages, newMessage]);
    //        console.log(newMessage);
    //    };
    //}, [username]);

    return (
        <div class='chat'>
            <ul>
                {/*
                {messages.map(message => (
                    <li class='chat' key={message.extra.id}>
                        {message.user}: {message.message}
                    </li>
                ))}
                */}
                
                <li>
                    balls: cock
                </li>
                <li>
                    test: 1
                </li>
                <li>
                    test: 2
                </li>
                <li>
                    test: three
                </li>
            </ul>
        </div>
    )
}

export default Widget;