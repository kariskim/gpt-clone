import "./Left.scss";
// import { ReactComponent as MyImage } from "../assets/gpt_image.svg";
// import { Logo } from "./Logo";

function Left({ chats, agents }) {
  return (
    <>
      <div className="main-left">
        <div className="main-left-top">
          <div className="logo">
            {/* <MyImage /> */}
          </div>
          ChatGPT
        </div>
        <div className="area">
          <h3 className="title"> Yesterday </h3>
          <ol>
            {agents.map((agent) => (
              <li key={agent.agentId}>{agent.agentTitle}</li>
            ))}
          </ol>
        </div>
        <div className="area">
          <h3 className="title"> Previous 7 Days </h3>
          <ol>
            {chats.map((chat) => (
              <li key={chat.chatId}>{chat.chatTitle}</li>
            ))}
          </ol>
        </div>
        
      </div>
    </>
  );
}

export default Left;
