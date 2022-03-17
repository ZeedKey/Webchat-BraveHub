import { Badge, Button, Card } from "react-bootstrap"
import styled from "styled-components"

interface IAlertProps {
    children: React.ReactNode
}

const Container = styled.div`

`

export const ChatCard: React.FC<IAlertProps> = ({ children }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Denis Kataev  <Badge bg="primary" style={{marginLeft : "0.5rem"}}>New message</Badge></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}