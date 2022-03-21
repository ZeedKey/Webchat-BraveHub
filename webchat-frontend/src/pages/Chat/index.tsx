import { grey } from '@mui/material/colors';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import styled from 'styled-components';
import { ChatCard } from '../../components/Card';
import { MainLayout } from '../../components/Layout/MainLayout';
import { UsetTextField as TextField } from '../../components/UserInputField';
import { WS } from '../../contollers/api';
import { GlobalStyle } from '../../GlobalStyle';


const Grid = styled.div`
    height: 100vmin;
    display: grid;
    grid-template-areas: 
    'a b' 
    'a b' 
    'a c';
    grid-template-columns: 30% 70%;
    height: 100vh;
`
const ChatList = styled.div`
    grid-area: a;
    display: table;
    background: ${grey[100]};
    height: 100vh;
    
`
const ChatField = styled.form`
    grid-area: c;
`
export const Chat = () => {
    const [messages, setMessages] = useState<any>([]);
    const token: any = Cookies.get('token');
    const data: any = jwtDecode(token);

    console.log(data)

    WS.on("message", (message: any) => {
        setMessages([...messages, message]);
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        WS.emit("message", { data: e.target[0].value, name: data.username });
    }

    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <Grid>
                    <ChatList>
                        <ChatCard>1</ChatCard>
                        <ChatCard>1</ChatCard>
                        <ChatCard>1</ChatCard>
                        {/* {useOnMessage(ChatCard)} */}
                    </ChatList>
                    <ChatField onSubmit={handleSubmit}>
                        {
                            messages.map((m: any) => <p>{m.data} {m.name}</p>)
                        }
                        <TextField />
                        <button type="submit">Send</button>
                    </ChatField>
                </Grid>
            </MainLayout>

        </>


    );
}
