import { Send } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, TextField } from "@mui/material";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { messageAPI } from "../../services/message";
import { WS } from "../../services/websockets";
import { RootState } from "../../store";
import { MainLayout } from "../../ui-kit";
import { Message } from "../../ui-kit/Message";


export const Chat = () => {
    const isLogged = useSelector((state: RootState) => state.sessionReducer.isLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [messages, useSetMessages] = useState<any>([]);

    useEffect(() => {
        const HandleMessagesChange = (data: any) => useSetMessages(data)
        // WS.on("messageToClient", (data: any) => {
        //     // HandleMessagesChange
        // });
        if (!isLogged) navigate('/');
        else {
            const promise: any = dispatch(messageAPI.endpoints.getMessages.initiate(''))
            promise
                .unwrap()
                .then((fetched_messages: any) => {
                    HandleMessagesChange(fetched_messages);
                })
                .catch((error: any) => alert(error.status))
            promise.unsubscribe();
        }
    }, [])

    console.log(messages)

    const handleMessageSend = (e: any) => {
        e.preventDefault();
        WS.emit("messageToServer", '1')
        // const hash: any = Cookies.get('TOKEN')
        // e.preventDefault();
        // const promise: any = dispatch(messageAPI.endpoints.postMessage.initiate({
        //     author: jwtDecode<any>(hash).username,
        //     body: e.target[0].value,
        // }))
        // promise
        // .unwrap()
        // promise.unsubscribe();
    }
    return (
        <MainLayout>
            <Stack gap={2}>
                {
                    messages.map((message: any) => <Message author={message.author} body={message.body} />)
                }
            </Stack>
            <Stack direction='row' component='form' onSubmit={handleMessageSend} sx={{
                position: 'fixed',
                left: 32,
                right: 32,
                bottom: '2rem',
                alignItems: 'center'
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
