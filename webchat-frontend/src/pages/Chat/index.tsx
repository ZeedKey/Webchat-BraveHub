import { Send } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WS } from "../../services/websockets";
import { MainLayout, Message, useMessage, useSession } from "../../ui-kit";

export const Chat = () => {
    const { stateSession } = useSession();
    const navigate = useNavigate();
    const [messages, setMessages] = useState<any>([]);
    const { getMessages, sendMessage } = useMessage();

    useEffect(() => {
        if (!stateSession) navigate('/')
        else {
            getMessages()
                .then((data: any) => setMessages(data))
        }
    }, [])

    useEffect(() => {
        WS.on("messageToClient", (data: any) => setMessages((messages: any) => [...messages, data]))
        return () => WS.close()
    }, [setMessages])

    const handleMessageSend = (e: any) => {
        e.preventDefault();
        const hash: any = Cookies.get('TOKEN')
        sendMessage({
            author: jwtDecode<any>(hash).username,
            body: e.target[0].value
        });
    }
    return (
        <MainLayout>
            <Stack gap={2} direction='column'>
                {
                    messages.map((message: any) => <Message author={message.author} body={message.body} createDate={message.createdAt} />)
                }
            </Stack>
            <Stack direction='row' component='form' onSubmit={handleMessageSend} sx={{
                position: 'fixed',
                left: 32,
                right: 32,
                bottom: '2rem',
                alignItems: 'center',
                background: 'white',
                zIndex: 1
            }}>
                <TextField
                    fullWidth
                    id="outlined-error"
                    placeholder="Say hi!"
                />
                <IconButton type="submit" sx={{ height: 'min-content', ml: 1 }}>
                    <Send />
                </IconButton>
            </Stack>
        </MainLayout>
    )
}
