import { blue, common } from '@mui/material/colors';
import styled from 'styled-components'

const Container = styled.div`
    color: ${common.black};
    border-radius: 15px;
    background: ${blue[100]};
    min-width: fit-content;
    margin:  1rem 2rem;
    padding: 1rem;
`
const Author = styled.h6`
    font-weight: bold;
`
const Body = styled.p`
    margin:0;
    font-weight: 300;
`
interface IMessageProps {
    username: string;
    body: string;
}

export const Message: React.FC<IMessageProps> = ({ username, body }) => {
    return (
        <Container>
            <Author>{username}</Author>
            <Body>{body}</Body>
        </Container>
    );
}