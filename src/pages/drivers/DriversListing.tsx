import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDriver } from "../../types/interfaces";
import { StyledTableParts, Tables } from "../../components/parents/tables";
import { useData } from "../../context/AppContext";
import { useTranslationsData } from "../../context/TranslationContext";
import { ListingHolder } from "../../components";

const DriversListing = () => {
  const { t } = useTranslationsData();
  const {
    // setDriverId,
    fetchDrivers,
    drivers,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRows,
    setTotalRows,
  } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
    localStorage.removeItem("driverId");
  }, []);

  return (
    <ListingHolder
      onClick={() => navigate("/add-driver")}
      onClickImport={() => {}}
      headerChildren={t("main.drivers")}
    >
      <Tables
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        childrenRows={drivers.length}
        tableHeadOne={"Name"}
        tableHeadTwo={"Type"}
        tableHeadThree={"Activity"}
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
    </ListingHolder>
  );
};

export default DriversListing;
