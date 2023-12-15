import "./Left.scss";
import { ReactComponent as MyImage } from "../assets/gpt_image.svg";

function Left({ chats, agents }) {
  return (
    <>
      <div className="main-left">
        <div className="main-left-top">
          <div className="logo">
            <MyImage className="svg" />
          </div>
          ChatGPT
        </div>
        <h2> Agent List </h2>
        <ul>
          {agents.map((agent) => (
            <li key={agent.agentId}>{agent.agentTitle}</li>
          ))}
        </ul>
        <h2> Chat List </h2>
        <ul>
          {chats.map((chat) => (
            <li key={chat.chatId}>{chat.chatTitle}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Left;
