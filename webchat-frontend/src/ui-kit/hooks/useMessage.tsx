import { useDispatch } from "react-redux";
import { WS } from "../../services/websockets";
import { messageAPI } from "../../services/message";


export const useMessage = () => {
    const dispatch = useDispatch()
    return {
        getMessages: () => {
            const res: any = dispatch(messageAPI.endpoints.getMessages.initiate(''))
            res
                .catch((e: any) => alert(e.status))
            return res.unwrap()
        },
        sendMessage: (data: any) => {
            WS.emit("messageToServer", {
                author : '2wee',
                body : '2wee'
            })
        },
    }
}