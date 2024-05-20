import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockIcon from '@mui/icons-material/Lock';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const ColorfulFacebookIcon = styled(FacebookIcon)(({ theme }) => ({
  color: '#3b5998',
}));

const ColorfulTwitterIcon = styled(TwitterIcon)(({ theme }) => ({
  color: '#1DA1F2',
}));

const ColorfulTelegramIcon = styled(TelegramIcon)(({ theme }) => ({
  color: '#0088cc',
}));

const ColorfulGitHubIcon = styled(GitHubIcon)(({ theme }) => ({
  color: '#333',
}));

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
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
        position: "relative",
        height: "100vh",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {'        '}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="150px"
                  height="35px"
                  src={`../../assets/img_logo.png`}
                />
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Presales"
              to="/"
              icon={<HomeRepairServiceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Launchpad"
              to="/"
              icon={<RocketLaunchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Special Sales"
              to="/"
              icon={<LocalAtmIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lock"
              to="/"
              icon={<LockIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Utility & Tools"
              to="/"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Presale Alerts"
              to="/"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="KYC & Audits"
              to="/"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Docs"
              to="/"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>

        {/* SOCIAL MEDIA ICONS */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: "10px"
          }}
        >
          <IconButton component="a" href="https://telegram.org" target="_blank">
            <ColorfulTelegramIcon />
          </IconButton>
          <IconButton component="a" href="https://twitter.com" target="_blank">
            <ColorfulTwitterIcon />
          </IconButton>
          <IconButton component="a" href="https://github.com" target="_blank">
            <ColorfulGitHubIcon />
          </IconButton>
          <IconButton component="a" href="https://facebook.com" target="_blank">
            <ColorfulFacebookIcon />
          </IconButton>
        </Box>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
