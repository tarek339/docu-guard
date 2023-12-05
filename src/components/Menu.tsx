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
import { useFunctionsData, useTranslationsData } from "../context";
import { IoMdLogOut } from "react-icons/io";
import { IoPowerSharp } from "react-icons/io5";
import colors from "../assets/theme/colors";
import styles from "../assets/theme/styles";
import { Block } from "./parents/container";
import { TextMain } from "./parents/text";

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
              width: "200px",
              borderRadius: "12px",
              boxShadow: styles.shadow,
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open}>
                <Block style={{ padding: "10px 20px 10px 20px" }}>
                  <TextMain style={{ fontSize: "12px", fontWeight: 600 }}>
                    {t("main.account").toUpperCase()}
                  </TextMain>
                  <TextMain
                    style={{
                      color: colors.grey,
                      fontSize: "14px",
                      paddingTop: "5px",
                    }}
                  >
                    Tarek Jassine
                  </TextMain>
                </Block>
                <Divider />
                <Block
                  style={{
                    padding: "8px 8px 0px 8px",
                  }}
                >
                  <MenuItem onClick={logOut}>
                    <ListItemIcon>
                      <IoMdLogOut style={styles.menuIcons} />
                      <TextMain style={{ fontSize: "14px", paddingTop: "1px" }}>
                        {t("main.logOut")}
                      </TextMain>
                    </ListItemIcon>
                  </MenuItem>

                  <MenuItem onClick={turnOffApp}>
                    <ListItemIcon>
                      <IoPowerSharp style={styles.menuIcons} />
                      <TextMain style={{ fontSize: "14px", paddingTop: "1px" }}>
                        {t("main.shutDown")}
                      </TextMain>
                    </ListItemIcon>
                  </MenuItem>
                </Block>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
