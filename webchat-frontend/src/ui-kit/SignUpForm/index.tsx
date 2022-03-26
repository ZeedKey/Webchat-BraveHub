import { Button, Stack, TextField, Typography } from "@mui/material"
import { Modal } from "..";
import {useAuth} from '../hooks'
interface ISignUpForm {
    open: any;
}
interface IFormValues {
    username: string;
    email: string;
    password: string;
}

export const SignUp: React.FC<ISignUpForm> = ({ open }) => {
    const { send } = useAuth('signup');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const values: any = Object.fromEntries(form);
        send(values);
    }

    return (
        <Modal open={open}>
            <form onSubmit={onSubmit}>
                <Stack gap={3}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
                        Sign Up
                    </Typography>
                    <TextField name="username" id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField name="email" id="outlined-basic" type="email" label="Email" variant="outlined" required />
                    <TextField name="password" id="outlined-basic" label="Password" variant="outlined" required />
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign Up
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}