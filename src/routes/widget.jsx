import { useState, useEffect } from 'react'
import './widget.css'
import ComfyJS from 'comfy.js'
import { useLocation } from "react-router-dom"
import anime from 'animejs'

function Widget() {
    const param = useLocation().search;
    const username = new URLSearchParams(param).get('user');

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        ComfyJS.Init(username);
        ComfyJS.onChat = (user, message, flags, self, extra) => {
            const newMessage = { user, message, flags, self, extra };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            console.log(newMessage);
        };
    }, [username]);

    return (
        <>
            <ul>
                {messages.map(message => (
                    <li key={message.extra.id}>
                        {message.user}: {message.message}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Widget;
