import React, { FormEvent, FormEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap"
import axios from 'axios';
import { host } from "../../contollers/api";
import { Alert } from "../Alert";

export const SignForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        firstName: '',
        secondName: '',
        email: '',
    });
    const [error, setError] = useState({
        status: "",
        message: ""
    });
    const [isError, setIsError] = useState<boolean>(false);

    const handleFormChange = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        setData({ ...data, [target.id]: target.value });
    }
    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await host.post('/auth/signUp', {
            ...data
        })
            .then((user) => console.log(user))
            .catch(error => {
                setIsError(true);
                setError({
                    status: `Error : ${error.response.statusText}`,
                    message: error.response.data.message
                })
            }
            );
    }

    return (
        <Form onChange={handleFormChange} onSubmit={handleFormSubmit}>
            {isError && <Alert title={error.status} onClose={setIsError}>{error.message}</Alert>}
            
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="name" placeholder="Enter your first name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondName">
                <Form.Label>Second name</Form.Label>
                <Form.Control type="name" placeholder="Enter your second name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" required />
                <Form.Text className="text-muted">
                    Other users will see this instead of your real name
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}