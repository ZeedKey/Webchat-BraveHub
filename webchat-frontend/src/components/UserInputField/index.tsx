import { FloatingLabel, Form } from 'react-bootstrap'
import styled from 'styled-components'

export const UsetTextField: React.FC<React.ReactNode> = () => {

    return (
            <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{
                    position: 'fixed',
                    bottom:'0',
                    height: '10rem'
                }}
            />
    )
}