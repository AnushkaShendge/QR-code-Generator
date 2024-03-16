import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    //question
    { message: "Type in your URL: ", name: "URL" }
  ])
  .then((answer) => {
    // use user ans
    const url = answer.URL;
    const qr_png = qr.imageSync(url, { type: "png" }); // Use imageSync to get buffer
    fs.writeFileSync("qr_img.png", qr_png); // Write buffer to file
    console.log("QR code image generated successfully.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // prompt couldn't be rendered
      console.error("Error rendering prompt.");
    } else {
      // something went wrong
      console.error("Error:", error);
    }
  });
