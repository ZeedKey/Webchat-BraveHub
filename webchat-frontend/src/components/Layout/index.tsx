import React from 'react';
import { Footer } from '../Containers/Footer';
import { Header } from '../Containers/Header';

export const MainLayout: React.FC<React.ReactNode> = ({children}): JSX.Element => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}