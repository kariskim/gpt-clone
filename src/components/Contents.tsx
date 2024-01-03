import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import "./Contents.scss"

import { ContentsProps } from "../interfaces/interfaces.tsx";
import ContentsMiddle from "./ContentsMiddle.tsx";

const StickerPopup = ({ onClose }) => {

    // Portal을 위한 컨테이너 엘리먼트를 생성합니다.
    const portalContainer = document.createElement('div');

    useEffect(() => {
    // body 밑에 portalContainer를 추가합니다.
    document.body.appendChild(portalContainer);

    // 컴포넌트가 unmount될 때 컨테이너를 제거합니다.
    return () => {
        document.body.removeChild(portalContainer);
    };
    }, [portalContainer]);


    // 팝업이 열려있는지 여부를 state로 관리합니다.
    const [isOpen, setIsOpen] = useState(true);
  
    // 팝업을 닫는 함수
    const closePopup = () => {
      setIsOpen(false);
      onClose();
    };
  
    return ReactDOM.createPortal(
        isOpen && (
          <div className="sticker-popup">
            <p>스티커 팝업 내용</p>
            <button onClick={closePopup}>닫기</button>
          </div>
        ),
        portalContainer
      );
  };


const Contents: React.FC<ContentsProps> = ({ conversations = [] }) => {

    const [showPopup, setShowPopup] = useState(false);
    const alreadyChatted = conversations.length > 0        

     // 팝업 닫힐 때 실행될 함수
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="main-content">
                <div className="top-area justify-between">
                    <div className="label-wrapper flex items-center gap-1" onClick={() => setShowPopup(true)}>
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