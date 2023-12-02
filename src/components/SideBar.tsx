import colors from "../assets/theme/colors";
import { Block } from "./parents/container";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslationsData } from "../context/TranslationContext";
import { useNavigate } from "react-router-dom";
import { SideBarButton } from "./parents/buttons";

const iconStyle = {
  fontSize: "24px",
  paddingBottom: "2.5px",
};

const SideBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslationsData();
  return (
    <Block
      style={{
        width: "16%",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: colors.bgSideBar,
      }}
    >
      <Block
        style={{
          height: "175px",
          padding: "24px",
          borderBottom: `0.5px solid ${colors.grey}`,
        }}
      ></Block>
      <Block
        style={{
          height: "365px",
          padding: "24px 15px 24px 15px",
          borderBottom: `0.5px solid ${colors.grey}`,
        }}
      >
        <SideBarButton
          onClick={() => {}}
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
          onClick={() => navigate("/account")}
          icon={<PersonIcon style={iconStyle} />}
          firstLetter={t("siderBar.a")}
          rest={t("siderBar.ccount")}
        />
        <SideBarButton
          onClick={() => {}}
          icon={<SettingsIcon style={iconStyle} />}
          firstLetter={t("siderBar.s")}
          rest={t("siderBar.ettings")}
        />
      </Block>
    </Block>
  );
};

export default SideBar;
