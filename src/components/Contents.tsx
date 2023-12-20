import { useState } from "react";
import "./Contents.scss"

import { ContentsProps } from "../interfaces/interfaces.tsx";
import ContentsMiddle from "./ContentsMiddle.tsx";



const Contents: React.FC<ContentsProps> = ({ conversations = [] }) => {

    const alreadyChatted = conversations.length > 0    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="main-content">
                <div className="top-area">ChatGPT 3.5</div>
                {/* <div className="middle-area">                    
                
                </div> */}
                <ContentsMiddle alreadyChatted={alreadyChatted} conversations={conversations}/>
                <div className="input-area">
                    <div>Input Area</div>
                </div>
            </div>
        </>

    );

}

export default Contents