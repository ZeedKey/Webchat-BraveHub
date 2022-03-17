import { Header } from "../../Header"

export const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            {children}
            {/* <Footer /> */}
        </>
    )
}