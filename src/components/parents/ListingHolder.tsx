import { Block } from "./container";
import Header from "./tables/Header";
import { IListingHolder } from "../../types/interfaces";

const ListingHolder = (props: IListingHolder) => {
  return (
    <Block style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px" }}>
      <Block style={{ marginBottom: 40 }}>
        <Header
          onClick={props.onClick}
          onClickImport={props.onClickImport}
          headerChildren={props.headerChildren}
        />
      </Block>
      {props.children}
    </Block>
  );
};

export default ListingHolder;
