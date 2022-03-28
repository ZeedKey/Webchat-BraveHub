import { Send } from "@mui/icons-material"
import { IconButton, Stack, TextField } from "@mui/material"

interface IInput {
    handleMessageSend: React.FormEventHandler<HTMLFormElement> | undefined
}
export const Input: React.FC<IInput> = ({ handleMessageSend }) => {
    return (
        <Stack direction='row' component='form' onSubmit={handleMessageSend} sx={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            background: 'white',
            zIndex: 1
        }}>
            <TextField
                name = 'body'
                required
                autoCorrect="false"
                fullWidth
                id="outlined-error"
                placeholder="Say hi!"
            />
            <IconButton type="submit" sx={{ height: 'min-content', ml: 1 }}>
                <Send />
            </IconButton>
        </Stack>
    )
}