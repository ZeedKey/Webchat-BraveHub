import { Box, Typography } from "@mui/material";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { IDecodedToken } from "../../models/decodedtoken";

interface IMessageProps {
    id?: number;
    author: string | undefined;
    body: string;
}

export const Message: React.FC<IMessageProps> = ({ author, body, id }) => {
    const messageStyle = {
        background: 'white',
        color: "black",
        padding: '0.5rem 1rem',
        minWidth: '10rem',
        maxWidth: 'max-content',
        borderRadius: '20px',
        flexWrap: 'wrap',
        overflowWrap: ' break-word'
    }

    const myMessageStyle = {
        background: 'white',
        color: "black",
        padding: '0.5rem 1rem',
        minWidth: '10rem',
        maxWidth: 'max-content',
        borderRadius: '20px',
        alignSelf: 'end',
        flexWrap: 'wrap',
        overflowWrap: ' break-word'
    }
    const cookie_hash: string | undefined = Cookies.get('TOKEN');
    const hash: string = cookie_hash ? cookie_hash : "";
    const username = jwtDecode<IDecodedToken>(hash).username;
    const style = username === author ? myMessageStyle : messageStyle;
    return (
        <Box sx={style}>
            <Typography variant='h6'>{author}
            </Typography>
            <Typography variant='body1' component='p'>{body}</Typography>
        </Box>
    );
}
