import { Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { inicatorProps, tabProps } from ".";
import { GridNoSpace } from "../container";

const TableMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <GridNoSpace style={{ columnGap: 30 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={inicatorProps}
      >
        <Tab sx={tabProps} label="Item one" />
        <Tab sx={tabProps} label="Item Two" />
        <Tab sx={tabProps} label="Item Three" />
      </Tabs>
    </GridNoSpace>
  );
};

export default TableMenu;
