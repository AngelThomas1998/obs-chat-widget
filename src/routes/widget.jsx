import { useState, useEffect } from 'react'
import './widget.css'
import ComfyJS from 'comfy.js'
import { useLocation } from "react-router-dom"
import anime from 'animejs'

function Widget() {
    const param = useLocation().search;
    const username = new URLSearchParams(param).get('user');
    // URL should look like "https://widget.bruh.ninja/widget?user={username}" 

    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        ComfyJS.Init(username);
        ComfyJS.onChat = (user, message, flags, self, extra) => {
            const newMessage = { user, message, flags, self, extra };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            console.log(newMessage);
        };
        return () => ComfyJS.Disconnect();
    }, [username]);

    return (
        <div>
            <ul class='chat'>
                {messages.map(message => (
                    <>
                    <li class="user" key={message.extra.id}>
                            {message.user}
                        </li>
                        <li class="usermessage" key={message.extra.id}>
                            {message.message}
                        </li>
                        
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Widget;
