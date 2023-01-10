import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// import { MainMenu } from 'Components/Organisms/menu/mainMenu';

export default function MainLayout() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <MainMenu /> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        메인 레이아웃입니다
        <Outlet />
      </Box>
    </Box>
  );
}
