import { Button, Typography } from "@mui/material";
import React from "react";
import { MainLayout } from "../../ui-kit";

export const Home = () => {
  const TitleStyle = {
    textAlign: "center",
    mt: 20,
    fontSize: "5ch",
    fontWeight: "thin",
  };
  return (
    <MainLayout>
      <Typography variant="subtitle1" component="h4" sx={{ ...TitleStyle }}>
        BraveHub is a free messenger for developers
      </Typography>
      <Button variant="contained" sx={{ textAlign: "center" }}>
        Start messaging
      </Button>
    </MainLayout>
  );
};
