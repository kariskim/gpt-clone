import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./StickerPopup.scss"

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

export default StickerPopup