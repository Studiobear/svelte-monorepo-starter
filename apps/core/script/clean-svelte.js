"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const traverse = require("filewalker");
const path_1 = require("path");
const src_root = path_1.resolve(__dirname, "../src");
traverse(src_root).on("file", (relative, stats, absolute) => {
    absolute.endsWith(".tsx") && fs_extra_1.removeSync(absolute.replace(".tsx", ".svelte"));
}).walk();
