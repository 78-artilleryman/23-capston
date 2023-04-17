import { useState } from 'react'
import './ChatGpt.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";

const API_KEY = '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';

function ChatGPT() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am chatGPT!", //GPT 시작 멘트
      sender: "ChatGPT"
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await MessageChatGPT(newMessages);

  }

  async function MessageChatGPT(charMessages){
    //charMessages{ sender: "user" or "chatGPT", message: "The message content here"}
    // apiMessages { role: "user" or "assistant", content: "the message content here""} api가 알아들을 수 있도록 이런 형태로 바꿔줘야함

    let apiMessage = charMessages.map((messageObject) =>{
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role="assistant"
      }else{
        role = "user"
      }
      return {
        role: role, content: messageObject.message
      }
    });

    const systemMessage = {
      role: "system",
      content: "Speak like a pirate" //GPT 컨셉 설정
    }

    const apiRequestBody = {
      "model" : "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessage // [message1, message2 ...]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages( 
        [...charMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false);
    });
  }
  
  return (
    <div className='ChatGpt'>
      <div style={{ height: "100%", width: "400px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}>
              {messages.map((message, i) => {
                return <Message key={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default ChatGPT
