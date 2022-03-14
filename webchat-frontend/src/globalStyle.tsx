import { colors } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body{
        margin:0;
        font-family: 'Roboto';
        background-color: ${colors.common.white};
        animation: background-gradient-animation 3s ease-in-out infinite;
        animation-direction: alternate;
    }

    header, footer {
        padding: 1rem 5rem 1rem 5rem;
        color: ${colors.common.black};
    }


    @keyframes background-gradient-animation {
        0% {
            background-color: ${colors.common.white};
            color: ${colors.common.black};
        }
        100%{
            background-color: ${colors.blue[500]};
            color: ${colors.common.white};
        }
    }
`