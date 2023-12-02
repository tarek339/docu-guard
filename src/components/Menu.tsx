import {
  ClickAwayListener,
  Divider,
  Grow,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useFunctionsData } from "../context/FunctionsContext";
import style from "../assets/theme/styles";
import Block from "./parents/container/Block";
import { IoMdLogOut } from "react-icons/io";
import { IoPowerSharp } from "react-icons/io5";
import TextMain from "./parents/text/TextMain";
import colors from "../assets/theme/colors";
import Grid from "./parents/container/Grid";
import { useTranslationsData } from "../context/TranslationContext";

export default function Menu() {
  const { open, handleClose, anchorRef, turnOffApp, logOut } =
    useFunctionsData();
  const { t } = useTranslationsData();

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="top"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === "top" ? "top right" : "top right",
          }}
        >
          <Paper
            elevation={0}
            style={{
              marginRight: "20px",
              width: "250px",
              borderRadius: "12px",
              boxShadow: style.shadow,
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open}>
                <Block style={{ padding: "10px 20px 10px 20px" }}>
                  <TextMain>{t("main.account")}</TextMain>
                  <TextMain style={{ color: colors.grey }}>
                    Tarek Jassine
                  </TextMain>
                </Block>
                <Divider />
                <Block
                  style={{
                    padding: "8px 8px 0px 8px",
                  }}
                >
                  <Grid>
                    <MenuItem onClick={logOut}>
                      <ListItemIcon>
                        <IoMdLogOut style={style.menuIcons} />
                        <TextMain>{t("main.logOut")}</TextMain>
                      </ListItemIcon>
                    </MenuItem>

                    <MenuItem onClick={turnOffApp}>
                      <ListItemIcon>
                        <IoPowerSharp style={style.menuIcons} />
                        <TextMain>{t("main.shutDown")}</TextMain>
                      </ListItemIcon>
                    </MenuItem>
                  </Grid>
                </Block>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
