import { FloatingLabel, Form } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div` 
    height: 5rem;
`

export const UsetTextField: React.FC<React.ReactNode> = () => {
    return <Container className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Type your message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
    </Container>
}