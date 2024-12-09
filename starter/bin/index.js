#!/usr/bin/env node
import {parsePrompt} from "../prompt.js"
import path from "path"
import { fileURLToPath } from 'node:url';

import { createFolder, copyFolder , runCommand } from "./utils/commands.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const Root = path.join(__dirname,"../");
const TEMPLATE = path.join(__dirname,"../template");


// const PROJECT_TITLE = process.argv[2]||"zikojs-project";
// createFolder(PROJECT_TITLE);
// copyFolder(TEMPLATE,path.join(process.cwd(),PROJECT_TITLE));
// runCommand(`cd ${PROJECT_TITLE} && npm install`);

parsePrompt().then(({name, template_path})=>{
    const url = path.join(Root, template_path)
    console.log({url})
})
