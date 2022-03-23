import { Button, Stack, TextField, Typography } from "@mui/material"
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from ".."
import { authAPI } from "../../services/auth";
import { setIsLogged } from "../../store/session";

interface ISignInForm {
    open: any;
}
export const SignIn: React.FC<ISignInForm> = ({ open }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e: any) => {
        e.preventDefault();
        const promise: any = dispatch(authAPI.endpoints.signin.initiate({
            username: e.target[0].value,
            password: e.target[2].value,
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
                        Sign In
                    </Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign In
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}