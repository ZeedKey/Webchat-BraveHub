import { Alert, Button, Stack, TextField, Typography } from "@mui/material"
import { Modal } from ".."
import { useAuth } from "../hooks";

interface ISignInForm {
    isOpen: boolean;
}
export const SignIn: React.FC<ISignInForm> = ({ isOpen }) => {
    const { send, isError } = useAuth('signin');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const values: any = Object.fromEntries(form);
        send(values);
    }
    return (
        <Modal isOpen={isOpen}>
            <form onSubmit={onSubmit}>
                <Stack gap={3}>
                    <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
                        Sign In
                    </Typography>
                    <TextField name="username" id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField name="password" id="outlined-basic" label="Password" variant="outlined" required />
                    {isError && <Alert severity="error">Ошибка!</Alert>}
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign In
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}