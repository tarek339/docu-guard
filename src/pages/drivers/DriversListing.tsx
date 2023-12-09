import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDriver } from "../../types/interfaces";
import {
  useDriversData,
  useFunctionsData,
  useTranslationsData,
} from "../../context";
import { Block } from "../../components/parents/container";
import { StyledTableParts, Tables } from "../../components/parents/tables";
import Header from "../../components/parents/tables/Header";

const DriversListing = () => {
  const { t } = useTranslationsData();
  const { setDriverId, fetchDrivers, drivers } = useDriversData();
  const {
    resMessage,
    setResMessage,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRows,
    setTotalRows,
  } = useFunctionsData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
    localStorage.removeItem("driverId");
  }, []);

  const backUp = () => {
    window.api.backUpDriver();
    window.api.sendMessage((_event, message: string) => {
      setResMessage(message);
    });
  };

  return (
    <Block style={{ maxWidth: "1500px", margin: "0 auto", padding: "30px" }}>
      <Block style={{ marginBottom: 40 }}>
        <Header
          children={t("main.drivers")}
          onClick={() => navigate("/add-driver")}
        />
      </Block>
      <Tables
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        childrenRows={drivers.length}
        tableHeadOne={"Name"}
        tableHeadTwo={"Type"}
        tableHeadThree={"Activity"}
        tableHeadFour={"Location"}
        childrenCount={drivers.length}
        totalRows={totalRows}
        setTotalRows={setTotalRows}
        mappedChildren={(rowsPerPage > 0
          ? drivers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : drivers
        ).map((driver: IDriver, index) => (
          <StyledTableParts
            onClick={() => {}}
            key={driver.id}
            firstChild={
              index + 1 + " " + driver.firstName + " " + driver.lastName
            }
            secondChild={driver.firstName}
            thirdChild={driver.lastName}
          />
        ))}
      />
    </Block>
  );
};

export default DriversListing;
