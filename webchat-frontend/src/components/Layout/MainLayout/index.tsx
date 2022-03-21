import styled from "styled-components"
import { GlobalStyle } from "../../../GlobalStyle"
import { Header } from "../../Header"

export const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}