//import pdfFile from "./cv.pdf";
import { promises as fs } from "fs";
import path from "path";

export async function loader() {
  //const filePath = path.resolve("/");

  //const pdfStream = await fs.readFileSync("/root/app/files/cv.pdf");
  //console.log(pdfFile);
  const filePath = path.join("public", "cv.pdf");
  const data = await fs.readFile(filePath);

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=poschuler.pdf`,
    },
  });
}
