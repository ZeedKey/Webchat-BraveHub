import { createGlobalStyle } from "styled-components";
import { blue, grey, common } from "@mui/material/colors";

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    animation: bg-animation 3s ease-out infinite;
    animation-direction: alternate;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .modal-dialog {
        color: ${common.black};
    }

    @keyframes bg-animation {
        0%{
            background-color: ${common.white};
            color: ${blue[500]};
        }
        100%{
            background-color: ${common.black};
            color: ${common.white};
        }
    }
`;
