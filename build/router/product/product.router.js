"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const productRouter = (0, express_1.Router)();
productRouter.get('/products', product_controller_1.default.getAvailableProducts);
exports.default = productRouter;
