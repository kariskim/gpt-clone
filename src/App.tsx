import "./App.scss";
import Left from "./components/Left.tsx";
import { ChatList, AgentList } from "../interfaces/interfaces.tsx";
import Contents from "./components/Contents.tsx";

function App() {
  const chats: ChatList[] = [
    { chatId: 1, chatTitle: "Strawberry Flavor in English" },
    { chatId: 2, chatTitle: "처음 뵙겠습니다. 도와드릴까요?" },
    { chatId: 3, chatTitle: "Fetch VS XHR 차이점" },
    { chatId: 4, chatTitle: "Strawberry Flavor in English" },
    { chatId: 5, chatTitle: "처음 뵙겠습니다. 도와드릴까요?" },
    { chatId: 6, chatTitle: "Fetch VS XHR 차이점" },
  ];
  const agents: AgentList[] = [
    { agentId: 1, agentTitle: "secret agent" },
    { agentId: 2, agentTitle: "Fine Dust agent" },
    { agentId: 3, agentTitle: "Language Quiz Master" },
    { agentId: 4, agentTitle: "secret agent" },
    { agentId: 5, agentTitle: "Fine Dust agent" },
    { agentId: 6, agentTitle: "Language Quiz Master" },
  ];

  return (
    <>
      <div className="main">
        <Left chats={chats} agents={agents} />
        <Contents conversations={["conversations 1", "conversations 2"]}/>
      </div>
    </>
  );
}

export default App;
