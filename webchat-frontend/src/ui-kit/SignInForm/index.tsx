import { Button, Stack, TextField, Typography } from "@mui/material"
import { Modal } from ".."

interface ISignInForm {
    open: any;
}
export const SignIn: React.FC<ISignInForm> = ({ open }) => {
    return (
        <Modal open={open}>
            <form>
                <Stack gap={3}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
                        Sign In
                    </Typography>
                    <TextField type="email" id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <Button type="submit" size="large" variant="contained" sx={{ textAlign: "center", mt: 2 }}>
                        Sign In
                    </Button>
                </Stack>
            </form>
        </Modal>
    )
}