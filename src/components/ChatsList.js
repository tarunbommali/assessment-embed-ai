import React from 'react';
import { useSelector } from 'react-redux';

const ChatsList = () => {
    // Access the chatList from the Redux store
    const { chatList } = useSelector(state => state.chatUsers) || { chatList: [] };

    return (
        <div>
            <h2>this week</h2>
            <ul>
                {chatList.map(chat => (
                    <li key={chat.id} className="flex items-center">
                        {/* Render chat details here */}
                        {/* For example, you can render chat name */}
                        {chat.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatsList;
