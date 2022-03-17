import {Routes, Route} from "react-router-dom";
import { Chat } from "../../pages/Chat";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";

export const Router: React.FC<React.ReactNode> = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}