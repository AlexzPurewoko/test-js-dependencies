"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.L = exports.add = void 0;
const add_1 = __importDefault(require("./add"));
exports.add = add_1.default;
const l_1 = require("./some/l");
Object.defineProperty(exports, "L", { enumerable: true, get: function () { return l_1.L; } });
