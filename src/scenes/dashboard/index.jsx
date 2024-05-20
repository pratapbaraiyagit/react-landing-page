import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Launchpad Record"
          subtitle="Projects All Time High on our Platform"
        />

        <Box>
          <Header title="" subtitle="View All   >" />
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoRows="140px"
        gap="15px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #1D1F23, #653B35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "30px",
          }}
        >
          <img
            alt="profile-user"
            width="auto"
            height="auto"
            src={`../../assets/bitmamba.png`}
          />
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Bitmamba
            </Typography>
            <Typography
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Decentralised Exchange
            </Typography>
            <Typography variant="h4" color={colors.greenAccent[500]}>
              <img
                alt="profile-user"
                width="10px"
                height="15px"
                src={`../../assets/img_ellipse_2.png`}
              />{" "}
              X100
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #1D1F23, #611963)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "30px",
          }}
        >
          <img
            alt="profile-user"
            width="auto"
            height="auto"
            src={`../../assets/starcorn.png`}
          />
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              StarCorn Swap
            </Typography>
            <Typography
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Decentralised Exchange
            </Typography>
            <Typography variant="h4" color={colors.greenAccent[500]}>
              <img
                alt="profile-user"
                width="10px"
                height="15px"
                src={`../../assets/img_ellipse_2.png`}
              />{" "}
              X10
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #1D1F23, #1A564B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "30px",
          }}
        >
          <img
            alt="profile-user"
            width="auto"
            height="auto"
            src={`../../assets/ape.png`}
          />
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Ape Legend
            </Typography>
            <Typography
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              NFT Platform
            </Typography>
            <Typography variant="h4" color={colors.greenAccent[500]}>
              <img
                alt="profile-user"
                width="10px"
                height="15px"
                src={`../../assets/img_ellipse_2.png`}
              />{" "}
              X85
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #1D1F23, #2A2D3E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "30px",
          }}
        >
          <img
            alt="profile-user"
            width="auto"
            height="auto"
            src={`../../assets/gamepad.png`}
          />
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              GamePad
            </Typography>
            <Typography
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Launchpad
            </Typography>
            <Typography variant="h4" color={colors.greenAccent[500]}>
              <img
                alt="profile-user"
                width="10px"
                height="15px"
                src={`../../assets/img_ellipse_2.png`}
              />{" "}
              X1000
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #1D1F23, #631966)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px",
            borderRadius: "30px",
          }}
        >
          <img
            alt="profile-user"
            width="auto"
            height="auto"
            src={`../../assets/pinkchain.png`}
          />
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              PinkChain
            </Typography>
            <Typography
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Blockchain Network
            </Typography>
            <Typography variant="h4" color={colors.greenAccent[500]}>
              <img
                alt="profile-user"
                width="10px"
                height="15px"
                src={`../../assets/img_ellipse_2.png`}
              />{" "}
              X100
            </Typography>
          </Box>
        </Box>

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}
      </Box>
      <Box
        mt="30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb="0px">
          <Typography
            color='#6A4FE1'
            fontWeight="bold"
            sx={{ m: "0 0 5px 0", fontSize: "45px" }}
          >
            The Launchpad
          </Typography>
        </Box>

        <Box>
          <IconButton>
            <Box
              gridColumn="span 3"
              sx={{
                background: "#F20CEC",
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
              <Box ml="10px" mr="10px">
                <Typography color={colors.greenAccent[500]} fontWeight="bold">
                  Create Launchpad
                </Typography>
              </Box>
            </Box>
          </IconButton>
        </Box>
      </Box>
      <Box
        mt="10px"
        mb='20px'
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb="0px">
          <Typography color={colors.greenAccent[400]} sx={{ fontSize: "55px" }}>
            Protocol for Everyone!
          </Typography>
        </Box>

        <Box>
          <Typography color={colors.greenAccent[400]} sx={{ fontSize: "18px" }}>
            Tinapad Helps everyone to create their own tokens and
          </Typography>
          <Typography color={colors.greenAccent[400]} sx={{ fontSize: "18px" }}>
            token sales in few seconds. Tokens Created on Pinksale will
          </Typography>
          <Typography color={colors.greenAccent[400]} sx={{ fontSize: "18px" }}>
            will be varified and published on explorer websties.
          </Typography>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="15px"
      >       

        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #611963, #1D1F23)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2x",
            borderRadius: "30px",
          }}
        >
          
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Presales
            </Typography>
            <Typography
            mb='15px'
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Browse The Best Upcoming Project
            </Typography>
            <Typography variant="h6" color='#F20CEC' fontWeight="600">
              {`Browse Presales  >`}
            </Typography>
            <Typography variant="h6" color='#F20CEC' fontWeight="600">
              {`Create Presales  >`}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #9C5C46, #14161B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2x",
            borderRadius: "30px",
          }}
        >
          
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Staking
            </Typography>
            <Typography
            mb='15px'
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Stake $TINA
            </Typography>
            <Typography variant="h6" color='#9C5C46' fontWeight="600">
              {`Browse Presales  >`}
            </Typography>
            <Typography variant="h6" color='#9C5C46' fontWeight="600">
              {`Stake TINA  >`}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #89B68E, #15161B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10x",
            borderRadius: "30px",
          }}
        >
          
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Tokens
            </Typography>
            <Typography
            mb='15px'
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Create Your Own Token With FREE Audit included
            </Typography>
            <Typography mt='30px' variant="h6" color='#89B68E'>
              {`Create Presales  >`}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to left, #3C77BC, #14161B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2x",
            borderRadius: "30px",
          }}
        >
          
          <Box ml="15px">
            <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
              Airdrop
            </Typography>
            <Typography
            mb='15px'
              color={colors.grey[100]}
              fontWeight="100"
              sx={{
                fontSize: "11px",
              }}
            >
              Free Tool For Airdrops
            </Typography>
            <Typography mt='30px' variant="h6" color='#3C77BC'>
              {`Airdrop  >`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
