interface ChatList {
    chatId: number,
    chatTitle: string
}

interface AgentList {
    agentId: number,
    agentTitle: string
}

interface ContentsProps {
    conversations?: string[]
}

export type { ChatList, AgentList, ContentsProps}