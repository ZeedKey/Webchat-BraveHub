import { Alert, Button, Stack, TextField, Typography } from "@mui/material"
import { Modal } from "..";
import { IUser } from "../../models/user";
import { useAuth } from '../hooks'
interface ISignUpForm {
    isOpen: boolean
}

export const SignUp: React.FC<ISignUpForm> = ({ isOpen }) => {
    const { send, isError } = useAuth('signup');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const values = Object.fromEntries(form) as unknown as IUser;
        send(values);
    }

    return (
        <Modal isOpen={isOpen}>
            <form onSubmit={onSubmit}>
                <Stack gap={3}>
                    <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
                        Sign Up
                    </Typography>
                    <TextField name="username" id="outlined-basic" label="Username" variant="outlined" required focused />
                    <TextField name="email" id="outlined-basic" type="email" label="Email" variant="outlined" required />
                    <TextField name="password" id="outlined-basic" label="Password" variant="outlined" required />
                    {isError && <Alert severity="error">Такой пользователь уже существует!</Alert>}
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign Up
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}