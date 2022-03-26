import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface IMessageProps {
    author: string;
    body: string;
    createDate: string;
}

export const Message: React.FC<IMessageProps> = ({ author, body, createDate }) => {
    const messageStyle = {
        background: blue[100],
        padding: '0.5rem 1rem',
        width: 'fit-content',
        maxWidth: 'fit-content',
        borderRadius: '20px',
    }

    const myMessageStyle = {
        background: blue[100],
        padding: '0.5rem 1rem',
        width: 'fit-content',
        borderRadius: '20px',
        alignSelf: 'end'
    }
    const hash: any = Cookies.get('TOKEN');
    const username = jwtDecode<any>(hash).username
    const style = username === author ? myMessageStyle : messageStyle;
    return (
        <Box sx={style}>
            <Typography variant='h6'>{author}
                {/* <Typography component='span' variant='body1'> {createDate.slice(0, 4)} {createDate.slice(11, 19)}</Typography> */}
            </Typography>
            <Typography variant='body1'>{body}</Typography>
        </Box>
    );
}
