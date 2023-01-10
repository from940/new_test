import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// import { MainMenu } from 'Components/Organisms/menu/mainMenu';

export default function MainLayout() {
  console.log(" find hostname  :: ", window.location);
  return (
    <Box sx={{ width: "100%" }}>
      {/* <MainMenu /> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flex: "1",
          minWidth: "400px",
          padding: "10px",
          overflowX: "auto",
        }}
      >
        메인 레이아웃입니다
        <Outlet />
      </Box>
    </Box>
  );
}