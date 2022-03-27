import { useDispatch } from "react-redux";
import { WS } from "../../services/websockets";
import { messageAPI } from "../../services/message";
import { IMessage } from "../../models/message";


export const useMessage = () => {
    const dispatch = useDispatch()
    return {
        getMessages: () => {
            const res: any = dispatch(messageAPI.endpoints.getMessages.initiate(''))
            res
                .catch((e: any) => alert(e.status))
            return res.unwrap()
        },
        sendMessage: (data: IMessage) => {
            WS.emit("messageToServer", data)
        },
    }
}