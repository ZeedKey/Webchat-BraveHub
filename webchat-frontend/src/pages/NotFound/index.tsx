
import styled from 'styled-components';
import { MainLayout } from '../../components/Layout/MainLayout';

const Container = styled.div`
    margin-top:25rem;
    text-align: center;
`
const Title = styled.h1`
    font-size: 20ch;
    font-weight: 700;
`
const Subtitle = styled.h4`
    font-size: 4ch;
    font-weight: 500;
    margin-bottom: 3rem;
`

export const NotFound = () => {
    return (
        <MainLayout>
            <Container>
                <Title>404</Title>
                <Subtitle>Oops! It seems that the page you looking for is missing!</Subtitle>
            </Container>
        </MainLayout>
    );
}
