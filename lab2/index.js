import fs from "fs/promises";
import { writeFile, readFile, appendFile } from "fs/promises";

// fs -> file system

// await writeFile("stud.txt", "Ashwani Bhardwaj\nRoll No: 2503201000335\nClass: CSE-14");
// console.log("File Written");

// const data = await readFile("stud.txt", "utf-8");
// console.log(`file content: ${data}`);

const addContent = async (fname, content) => {
    await writeFile(fname, content);
    console.log("File Written");
};

const readContent = async (fname) => {
    const data = await readFile(fname, "utf-8");
    return data;
};

const appendData = async (fname, content) => {
    await appendFile(fname, content);
}

await addContent("notes.txt", "FS is easy in JS");
console.log(await readContent("notes.txt"));
await appendData("notes.txt", "\n Trying to append new data to the existing file");
console.log(`After appending: \n ${await readContent("notes.txt")}`);