import { Stack } from "@mui/material";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMessage } from "../../models/message";
import { WS } from "../../services/websockets";
import { Input, MainLayout, Message, useMessage, useSession } from "../../ui-kit";

export const Chat = () => {
    const { stateSession } = useSession();
    const navigate = useNavigate();
    const [messages, setMessages] = useState<any>([]);
    const { getMessages, sendMessage } = useMessage();
    useEffect(() => {
        if (!stateSession) {
            WS.close()
            navigate('/')
        }
        else {
            WS.open()
            getMessages()
                .then((data: IMessage) => setMessages(data))
        }
    }, [stateSession])

    useEffect(() => {
        WS.on("messageToClient", (data: IMessage) => setMessages((messages: IMessage[]) => [...messages, data]))
        return () => WS.close()
    }, [setMessages])
    
    const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hash: any = Cookies.get('TOKEN')
        sendMessage({
            author: jwtDecode<any>(hash).username,
            body: e.target[0].value
        });
    }
    return (
        <MainLayout>
            <Stack gap={2} direction='column' sx={{ mb: 10 }}>
                {
                    messages.map((message: IMessage) => <Message author={message.author} body={message.body} />)
                }
            </Stack>
            <Input handleMessageSend={handleMessageSend} />
        </MainLayout>
    )
}
