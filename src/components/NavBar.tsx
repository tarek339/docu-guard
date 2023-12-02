import { AppBar, Avatar, IconButton, Toolbar, Tooltip } from "@mui/material";
import Block from "./parents/container/Block";
import style from "../assets/theme/styles";
import { CiSearch } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import tarek from "../assets/imgs/tarek.jpg";
import colors from "../assets/theme/colors";
import { useFunctionsData } from "../context/FunctionsContext";
import Menu from "./Menu";

const NavBar = () => {
  const { handleToggle, anchorRef } = useFunctionsData();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: colors.transparent,
        backdropFilter: "blur(2px)",
        width: "84%",
      }}
    >
      <Toolbar>
        <Block
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            height: "100hv",
          }}
        >
          <Block>
            <Tooltip title="Search">
              <IconButton size="medium" edge="start" color="inherit">
                <CiSearch style={style.icons} />
              </IconButton>
            </Tooltip>
          </Block>
          <Block
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100hv",
            }}
          >
            <Tooltip title="Contacts">
              <IconButton
                style={{ marginRight: "8px" }}
                size="medium"
                color="inherit"
              >
                <BsFillPeopleFill style={style.icons} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton
                style={{ marginRight: "8px" }}
                size="medium"
                color="inherit"
              >
                <IoMdNotifications style={style.icons} />
              </IconButton>
            </Tooltip>
            <IconButton
              ref={anchorRef}
              onClick={handleToggle}
              edge="end"
              disableRipple
            >
              <Avatar sx={{ width: 32, height: 32 }} alt="tarek" src={tarek} />
            </IconButton>
          </Block>
        </Block>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
