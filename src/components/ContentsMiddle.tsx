import './ContentsMiddle.scss'
import { useState } from "react";

const cardInfos = [{
    title: "Make a content strategy",
    desc: "for an online merch store"
}, { title: "Make a content strategy", desc: "for an online merch store" }, { title: "Make a content strategy", desc: "for an online merch store" }, { title: "Make a content strategy", desc: "for an online merch store" }]

function ContentsMiddle ({alreadyChatted, conversations}) {

    const [cards, setCards] = useState([
        { id: 0, isHovered: false },
        { id: 1, isHovered: false },
        { id: 2, isHovered: false },
        { id: 3, isHovered: false },        
      ]);

    const handleHover = (cardId: number, isHovered: boolean) => {
        const updatedCards = cards.map(card => {
            if (card.id === cardId) {
              return { ...card, isHovered };
            }
            return card;
          });
          setCards(updatedCards);
    };  
   
    
    return (

        <div className="middle-area">         
            { alreadyChatted ? ( conversations.map(conversation => <div key={conversation}>{conversation}</div>))
            : (
                <>
                    <div className="greeting"><h2>How can I help today ?</h2></div>
                    <div className="cards">
                        {cardInfos.map((card, idx) => <div className="card" onMouseEnter={() => handleHover(idx, true)} onMouseLeave={() => handleHover(idx, false)} key={idx}>                        
                            <div className="sentence">
                                <div className="title">{card.title}</div>
                                <div className="desc">{card.desc}</div>
                            </div>                        
                            { cards[idx].isHovered && (<div className="act-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>)}
                        </div>)}
                        
                    </div>
                </>
            )
            }
        </div>
    );

}


export default ContentsMiddle