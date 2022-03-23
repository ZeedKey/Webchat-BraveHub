import { Button, Stack, TextField, Typography } from "@mui/material"
import { Modal } from "..";
import { useNavigate } from 'react-router-dom';
import { authAPI } from "../../services/auth";
import { useSelector, useDispatch } from 'react-redux'
import Cookies from "js-cookie";
import { setIsLogged } from "../../store/session";
interface ISignUpForm {
    open: any;
}

export const SignUp: React.FC<ISignUpForm> = ({ open }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e: any) => {
        e.preventDefault();
        const promise: any = dispatch(authAPI.endpoints.signup.initiate({
            username: e.target[0].value,
            email: e.target[2].value,
            password: e.target[4].value,
        }))
        promise
            .unwrap()
            .then((data: any) => { 
                Cookies.set('TOKEN', data.token) 
                dispatch(setIsLogged(true))
                navigate('/chat')
            })
            .catch((error: any) => alert(error.status))
        promise.unsubscribe();
    }
    return (
        <Modal open={open}>
            <form onSubmit={onSubmit}>
                <Stack gap={3}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
                        Sign Up
                    </Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField id="outlined-basic" type="email" label="Email" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign Up
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}