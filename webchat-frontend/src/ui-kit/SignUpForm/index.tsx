import { Button, Stack, TextField, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Modal } from "..";
import { useNavigate } from 'react-router-dom';
import { authAPI } from "../../services";

interface ISignUpForm {
    open: any;
}

export const SignUp: React.FC<ISignUpForm> = ({ open }) => {
    const navigate = useNavigate();
    const onSubmit = (e: any) => {
        e.preventDefault();
        const {data} = authAPI.endpoints.signup.initiate({
            username: "Wann44ega",
            email: "wannega44@gmail.com",
            password: "wannega@gmail.com",
        });
        console.log(data)
    }
    return (
        <Modal open={open}>
            <form onSubmit={onSubmit}>
                <Stack gap={3}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
                        Sign Up
                    </Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign Up
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}