import "./Contents.scss"

interface ContentsProps {
    conversations?: string[]
}

function generateContents(alreadyChatted: boolean, conversations: string[]) {

    if (alreadyChatted) {
        return conversations.map(conversation => <div>{conversation}</div>)
    } else {
        return (
            <>
                <div>How can I help today ?</div>
                <div>Card area</div>
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