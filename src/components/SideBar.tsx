import colors from "../assets/theme/colors";
import { Block, GridColumn } from "./parents/container";
import { useTranslationsData } from "../context/TranslationContext";
import { useNavigate } from "react-router-dom";
import { SideBarButton } from "./parents/buttons";
import { useAdminData } from "../context";
import { TextMain, TextSmall } from "./parents/text";
import {
  AppleIcon,
  SignalCellularAltIcon,
  PeopleAltIcon,
  LocalShippingIcon,
  RvHookupIcon,
  ControlPointDuplicateIcon,
  PersonIcon,
  SettingsIcon,
} from "./icons";

const iconStyle = {
  fontSize: "24px",
  paddingBottom: "2.5px",
};

const SideBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslationsData();
  const { companyName } = useAdminData();
  return (
    <Block
      style={{
        width: "280px",
        height: "100vh",
        backgroundColor: colors.bgSideBar,
        top: 0,
        left: 0,
        position: "fixed",
      }}
    >
      <Block
        style={{
          height: "175px",
          padding: "24px",
          borderBottom: `0.5px solid ${colors.grey}`,
        }}
      >
        <GridColumn style={{ justifyContent: "center", rowGap: "20px" }}>
          <Block>
            <AppleIcon style={{ color: "#fff" }} fontSize="large" />
          </Block>
          <Block
            style={{
              backgroundColor: colors.bgSideBarBtn,
              borderRadius: "10px",
              padding: "12px",
            }}
          >
            <TextMain style={{ color: colors.white }}>
              {companyName.toUpperCase()}
            </TextMain>
            <TextSmall>ID: 123456</TextSmall>
          </Block>
        </GridColumn>
      </Block>
      <Block
        style={{
          height: "365px",
          padding: "24px 15px 24px 15px",
          borderBottom: `0.5px solid ${colors.grey}`,
        }}
      >
        <SideBarButton
          onClick={() => navigate("/dashboard")}
          icon={<SignalCellularAltIcon style={iconStyle} />}
          firstLetter={t("siderBar.o")}
          rest={t("siderBar.verview")}
        />
        <SideBarButton
          onClick={() => {}}
          icon={<PeopleAltIcon style={iconStyle} />}
          firstLetter={t("siderBar.d")}
          rest={t("siderBar.rivers")}
        />
        <SideBarButton
          onClick={() => {}}
          icon={<LocalShippingIcon style={iconStyle} />}
          firstLetter={t("siderBar.t")}
          rest={t("siderBar.rucks")}
        />
        <SideBarButton
          onClick={() => {}}
          icon={<RvHookupIcon style={iconStyle} />}
          firstLetter={t("siderBar.tr")}
          rest={t("siderBar.ailers")}
        />
        <SideBarButton
          onClick={() => {}}
          icon={<ControlPointDuplicateIcon style={iconStyle} />}
          firstLetter={t("siderBar.da")}
          rest={t("siderBar.ta")}
        />
        <SideBarButton
          onClick={() => navigate("/account")}
          icon={<PersonIcon style={iconStyle} />}
          firstLetter={t("siderBar.a")}
          rest={t("siderBar.ccount")}
        />
        <SideBarButton
          onClick={() => navigate("settings")}
          icon={<SettingsIcon style={iconStyle} />}
          firstLetter={t("siderBar.s")}
          rest={t("siderBar.ettings")}
        />
      </Block>
    </Block>
  );
};

export default SideBar;
