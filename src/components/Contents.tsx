import "./Contents.scss"

import {ContentsProps} from "../interfaces/interfaces.tsx";

const cardInfos = [{
    title: "Make a content strategy",
    desc: "for an online merch store"
}, {title: "Make a content strategy", desc: "for an online merch store"},{title: "Make a content strategy", desc: "for an online merch store"},{title: "Make a content strategy", desc: "for an online merch store"}]


function generateContents(alreadyChatted: boolean, conversations: string[]) {

    if (alreadyChatted) {
        return conversations.map(conversation => <div key={conversation}>{conversation}</div>)
    } else {
        return (
            <>
                <div className="greeting"><h2>How can I help today ?</h2></div>
                <div className="cards">
                    {cardInfos.map(card => <div className="card" key={card.title}>
                        <div className="title">{card.title}</div>
                        <div className="desc">{card.desc}</div>
                    </div>)}
                </div>
            </>
        );
    }
}

const Contents: React.FC<ContentsProps> = ({conversations = []}) => {

    const alreadyChatted = conversations.length > 0

    return (
        <>
            <div className="main-content">
                <div className="top-area">ChatGPT 3.5</div>
                <div className="middle-area">{generateContents(alreadyChatted, conversations)}</div>
                <div className="input-area">
                    <div>Input Area</div>
                </div>
            </div>
        </>

    );

}

export default Contents