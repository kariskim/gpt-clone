import './ContentsMiddle.scss'

const cardInfos = [{
    title: "Make a content strategy",
    desc: "for an online merch store"
}, { title: "Make a content strategy", desc: "for an online merch store" }, { title: "Make a content strategy", desc: "for an online merch store" }, { title: "Make a content strategy", desc: "for an online merch store" }]

function ContentsMiddle ({alreadyChatted, conversations}) {

    return (

        <div className="middle-area">         
            { alreadyChatted ? ( conversations.map(conversation => <div key={conversation}>{conversation}</div>))
            : (
                <>
                    <div className="greeting"><h2>How can I help today ?</h2></div>
                    <div className="cards">
                        {cardInfos.map(card => <div className="card" key={card.title}>
                            <div className="sentence">
                                <div className="title">{card.title}</div>
                                <div className="desc">{card.desc}</div>
                            </div>                        
                            { (<div className="act-btn">
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