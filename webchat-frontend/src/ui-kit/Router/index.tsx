import {Routes, Route, Navigate} from "react-router-dom";
import { Chat } from "../../pages/Chat";
import { Home } from "../../pages/Home";

export const Router: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    )
}