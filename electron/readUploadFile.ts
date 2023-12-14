import { ipcMain } from "electron";
import fs from "fs";
import { PdfReader } from "pdfreader";

export function readDriverFile() {
  ipcMain.handle("handle-upload", (_event, path: string) => {
    try {
      fs.readFile(path, (_err, pdfBuffer) => {
        console.log(path);
        // pdfBuffer contains the file content
        // new PdfReader({}).parseBuffer(pdfBuffer, (err, item) => {
        //   if (err) console.error("error:", err);
        //   else if (!item) console.warn("end of buffer");
        //   else if (item.text) console.log(item.text);
        // });
      });
    } catch (error) {
      console.log(error);
    }
  });
}
