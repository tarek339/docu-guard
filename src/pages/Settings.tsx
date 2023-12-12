import { TextButton } from "../components/parents/buttons";
import { Block } from "../components/parents/container";

const Settings = () => {
  return (
    <Block>
      <TextButton onClick={() => window.api.sendConfig("en")}>
        change language
      </TextButton>
      <TextButton onClick={() => window.api.sendConfig("de")}>
        change language
      </TextButton>
    </Block>
  );
};

export default Settings;
