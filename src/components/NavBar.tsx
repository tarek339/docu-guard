import { AppBar, Avatar, IconButton, Toolbar, Tooltip } from "@mui/material";
import { Block } from "./parents/container";
import { CiSearch } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import tarek from "../assets/imgs/tarek.jpg";
import colors from "../assets/theme/colors";
import styles from "../assets/theme/styles";
import { useFunctionsData, useTranslationsData } from "../context";
import { Menu } from ".";

const NavBar = () => {
  const { handleToggle, anchorRef } = useFunctionsData();
  const { t } = useTranslationsData();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: colors.transparent,
        backdropFilter: "blur(2px)",
        marginBottom: "50px",
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
            <Tooltip title={t("main.search")}>
              <IconButton size="medium" edge="start" color="inherit">
                <CiSearch style={styles.icons} />
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
            <Tooltip title={t("main.contacts")}>
              <IconButton
                style={{ marginRight: "8px" }}
                size="medium"
                color="inherit"
              >
                <BsFillPeopleFill style={styles.icons} />
              </IconButton>
            </Tooltip>
            <Tooltip title={t("main.notifications")}>
              <IconButton
                style={{ marginRight: "8px" }}
                size="medium"
                color="inherit"
              >
                <IoMdNotifications style={styles.icons} />
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
