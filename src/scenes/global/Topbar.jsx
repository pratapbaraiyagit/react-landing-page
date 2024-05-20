import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={5}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor='#1D1F23'
        borderRadius="20px"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 5, width: '300px' }} placeholder="Search" />
      </Box>

      {/* ICONS */}
      <Box
        display="flex"
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#F20CEC !important",
          },
          "& .pro-menu-item.active": {
            color: "#F20CEC !important",
          },
        }}
      >
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton>
          <Box
            gridColumn="span 3"
            sx={{
              background: "#331237",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            <img
                  alt="profile-user"
                  width="auto"
                  height="auto"
                  src={`../../assets/create.png`}
                />
            <Box ml="10px" mr='10px'>
              <Typography color={colors.greenAccent[500]} fontWeight="bold">
                Create
              </Typography>
            </Box>
          </Box>
        </IconButton>
        <IconButton>
        <Box
            gridColumn="span 3"
            sx={{
              background: "#331237",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            <img
                  alt="profile-user"
                  width="auto"
                  height="auto"
                  src={`../../assets/create.png`}
                />
            <Box ml="10px" mr='10px'>
              <Typography color={colors.greenAccent[500]} fontWeight="bold">
                Ethereum Chain 
              </Typography>
            </Box>
                <ArrowDropDownIcon />
          </Box>
        </IconButton>
        <IconButton>
        <Box
            gridColumn="span 3"
            sx={{
              background: "#331237",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            <img
                  alt="profile-user"
                  width="auto"
                  height="auto"
                  src={`../../assets/create.png`}
                />
            <Box ml="10px" mr='10px'>
              <Typography color={colors.greenAccent[500]} fontWeight="bold">
                Connect Wallet
              </Typography>
            </Box>
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
