import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'

const API_KEY = "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";

function App() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Chatbot",
      sender: "ChatGPT"
    }
  ]) //[]

  const handleSend = async(message) => {
    const newMessage ={
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; //all the old message, + the new message

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator (chatgpt is typing)
    setTyping(true);

    // process message to chatGPT (send it over and see the response)
    await MessageChatGPT(newMessages);
  }

  async function MessageChatGPT(chatMessages){
    // chatMessages { sender: "user" or "chatGPT", message: "The messge content here"}
    // apiMessages { role: "user" pr "assistant", content: "The message conent here" }

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role="assistant"
      }else{
        role ="user"
      }
      return { role: role, content: messageObject.message }
    });

    // role: "user" -> a message from the user, "assistant" -> a response from chatGPT
    // "system" -> generally one initial message defining How we want chatgpt to talk

    const systemMessage ={
      role: "system",
      content: "Speak like a pirate" 
      // 컨셉
      // speak like a pirate, Explain like I am a 10 years of experience software engineer
    }
        const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages // [message1, message2,message3]
      ] 
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "chatGPT"
        }]
      );
      setTyping(false);
    });
  }

  return (
    <div className='App'>
     <div style={{position: "relative", height:"800px", width:"700px"}}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={typing ? <TypingIndicator content="chatGPT is typing" /> :null}
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder='Type message here' onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>

     </div>
    </div>
  )
}

export default App
