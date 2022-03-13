import React from 'react';
import { Header } from '../Containers/Header';

export const MainLayout: React.FC<React.ReactNode> = ({children}): JSX.Element => {
    return(
        <>
        <Header/>
        {children}
        </>
    )
}