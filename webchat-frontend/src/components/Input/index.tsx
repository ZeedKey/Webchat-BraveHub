import styled from 'styled-components'

const Container = styled.div` 
    margin: 2rem;
`

export const UsetTextField: React.FC<React.ReactNode> = () => {
    return <Container className="form-group">
        <textarea placeholder="Type your message" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
    </Container>
}