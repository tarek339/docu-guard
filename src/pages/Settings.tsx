import { TextButton } from "../components/parents/buttons";
import { Block } from "../components/parents/container";
import { useTranslationsData } from "../context";

const Settings = () => {
  const { setLocale } = useTranslationsData();
  return (
    <Block>
      <TextButton
        onClick={() => {
          window.api.sendConfig("en");
          setLocale("en");
        }}
      >
        change language
      </TextButton>
      <TextButton
        onClick={() => {
          window.api.sendConfig("de");
          setLocale("de");
        }}
      >
        change language
      </TextButton>
    </Block>
  );
};

export default Settings;
