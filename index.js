import fs from "fs";
import { packageList } from "./utility.js";
const command = "pm uninstall --user 0 ";
const fileName = "./uninstall";

fs.writeFileSync(fileName, "");
console.log("script creation successful..!!");

packageList.map(item => {
    const newLine = 
`echo "Package: ${item}"
${command}${item}
echo ""
sleep 0.25

`;
    fs.writeFileSync(fileName, newLine, { flag: "a" });
});
console.log("script writing successful..!!");
