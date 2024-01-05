import { useState } from "react";
import "./Contents.scss"

import { ContentsProps } from "../interfaces/interfaces.tsx";
import ContentsMiddle from "./ContentsMiddle.tsx";
import StickerPopup from "./StickerPopup.tsx"

const Contents: React.FC<ContentsProps> = ({ conversations = [] }) => {

    const [showPopup, setShowPopup] = useState(false);
    const alreadyChatted = conversations.length > 0        

     // 팝업 닫힐 때 실행될 함수
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // 기존 클래스와 동적 클래스를 합쳐서 className으로 사용합니다.
    const combinedClass = `label-wrapper flex items-center gap-1 ${showPopup ? 'active' : ''}`;

    return (
        <>
            <div className="main-content">
                <div className="top-area justify-between">
                    <div className={combinedClass} onClick={() => setShowPopup(!showPopup)}>
                        <div className="label">ChatGPT 3.5</div>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>                    
                    <div>
                        Share Button
                    </div>                    
                </div>    
                {showPopup && <StickerPopup onClose={handlePopupClose} />}           
                <ContentsMiddle alreadyChatted={alreadyChatted} conversations={conversations}/>
                <div className="input-area">
                    <div>Input Area</div>
                </div>
            </div>
        </>

    );

}

export default Contents