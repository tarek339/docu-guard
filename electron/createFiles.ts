import fs from "fs";

export const createFiles = () => {
  // check if file exists
  const driversFile = `database/drivers.json`;
  const trucksFile = `database/trucks.json`;
  const trailersFile = `database/trailers.json`;
  const driversFileExists = fs.existsSync(driversFile);
  const trucksFileExists = fs.existsSync(trucksFile);
  const trailersFileExists = fs.existsSync(trailersFile);
  let driversData = {
    drivers: [],
  };
  let trucksData = {
    trucks: [],
  };
  let trailersData = {
    trailers: [],
  };

  fs.readFile(driversFile, "utf-8", (_err, data) => {
    if (!driversFileExists) {
      fs.promises.writeFile(driversFile, JSON.stringify(driversData, null, 2));
    }
    if (driversFileExists && !data) {
      fs.promises.writeFile(driversFile, JSON.stringify(driversData, null, 2));
    }
  });
  fs.readFile(trucksFile, "utf-8", (_err, data) => {
    if (!trucksFileExists) {
      fs.promises.writeFile(trucksFile, JSON.stringify(trucksData, null, 2));
    }
    if (trucksFileExists && !data) {
      fs.promises.writeFile(trucksFile, JSON.stringify(trucksData, null, 2));
    }
  });
  fs.readFile(trailersFile, "utf-8", (_err, data) => {
    if (!trailersFileExists) {
      fs.promises.writeFile(
        trailersFile,
        JSON.stringify(trailersData, null, 2)
      );
    }
    if (trailersFileExists && !data) {
      fs.promises.writeFile(
        trailersFile,
        JSON.stringify(trailersData, null, 2)
      );
    }
  });
};
