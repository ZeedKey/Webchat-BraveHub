import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { MainLayout } from "../../ui-kit";

interface IMessageProps {
    author: string;
    body: string;
}

export const Message: React.FC<IMessageProps> = ({author, body}) => {
    const messageStyle = {
        background: blue[100],
        padding: '0.5rem 1rem',
        width: 'fit-content',
        borderRadius: '20px',
    }
    return (
        <Box sx={messageStyle}>
            <Typography variant='h6'>{author}</Typography>
            <Typography variant='body1'>{body}</Typography>
        </Box>
    );
}
