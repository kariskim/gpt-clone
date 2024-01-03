import "./Contents.scss"

import { ContentsProps } from "../interfaces/interfaces.tsx";
import ContentsMiddle from "./ContentsMiddle.tsx";



const Contents: React.FC<ContentsProps> = ({ conversations = [] }) => {

    const alreadyChatted = conversations.length > 0        

    return (
        <>
            <div className="main-content">
                <div className="top-area">ChatGPT 3.5
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>               
                <ContentsMiddle alreadyChatted={alreadyChatted} conversations={conversations}/>
                <div className="input-area">
                    <div>Input Area</div>
                </div>
            </div>
        </>

    );

}

export default Contents