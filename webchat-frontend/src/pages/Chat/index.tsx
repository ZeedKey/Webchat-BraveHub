import { grey } from '@mui/material/colors';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../../components/Layout/MainLayout';
import { UsetTextField as TextField } from '../../components/Input';
import { WS } from '../../controllers/sockets';
import { GlobalStyle } from '../../GlobalStyle';
import { Message } from '../../components/Message';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';


const Grid = styled.form`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;

    button{
        margin-right: 2rem;
    }
`
const ChatField = styled.div`
    display: grid;
`

export const Chat = () => {
    const [messages, setMessages] = useState<any>([]);
    const token: any = Cookies.get('token');
    const data: any = jwtDecode(token);

    useEffect(() => {
        WS.emit("reload");
    }, []);

    useEffect(() => {
        WS.on("messageToClient", (message: any) => {
            setMessages([...messages, message]);
            console.log(message);
        });
    }, [messages]);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        WS.emit("messageToServer", { data: e.target[0].value, name: data.username });
    }

    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <ChatField>
                    {
                        messages.map((m: any) => <Message username={m.name} body={m.data} />)
                    }
                </ChatField>
                <Grid onSubmit={handleSubmit}>
                    <TextField />
                    <IconButton sx={{ height: 'min-content' }} color="primary" aria-label="upload picture" component="button" type="submit">
                        <SendIcon />
                    </IconButton>
                </Grid>
            </MainLayout>
        </>
    );
}
