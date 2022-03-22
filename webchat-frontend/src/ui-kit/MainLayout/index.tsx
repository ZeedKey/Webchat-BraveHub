import { Box } from "@mui/material";
import { Header } from "../Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx ={{p:"2rem"}}>
        {children}
      </Box>
    </>
  );
};
