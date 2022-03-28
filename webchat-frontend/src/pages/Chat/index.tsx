import { Stack } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { IMessage } from "../../models/message";
import { messageAPI } from "../../services/message";
import { WS } from "../../services/websockets";
import { Input, MainLayout, Message, useSession } from "../../ui-kit";
import { useDispatch } from "react-redux";

export const Chat = () => {
    const { stateSession, logout } = useSession();
    const dispatch = useDispatch();
    const [messages, setMessages] = useState<IMessage[]>([]);
    useEffect(() => {
        console.log(stateSession)
        if (!stateSession) {
            WS.close()
            logout()
        }
        else {
            WS.open()
            const data: any = dispatch(messageAPI.endpoints.getMessages.initiate('', {forceRefetch: true}))
            data.refetch();
            data.unwrap().then((e:any) => setMessages(e));
        }
    }, [])

    useEffect(() => {
        WS.on("messageToClient", (data: IMessage) => setMessages((messages: IMessage[]) => [...messages, data]))
        return () => WS.close()
    }, [setMessages])

    const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const values: any = Object.fromEntries(form);
        const hash: string | undefined = Cookies.get('TOKEN');
        const token: string = hash ? hash.split(' ')[1] : "";
        WS.emit('messageToServer', {
            author: token,
            body: values.body
        })
    }
    return (
        <MainLayout>
            <Stack gap={2} direction='column' sx={{ mb: 10 }}>
                {
                    messages.map((message: IMessage) => <Message key={message.id} author={message.author} body={message.body} />)
                }
            </Stack>
            <Input handleMessageSend={handleMessageSend} />
        </MainLayout>
    )
}
