"use strict";
exports.__esModule = true;
exports.S3 = void 0;
require("../../env");
var aws_sdk_1 = require("aws-sdk");
exports.S3 = new aws_sdk_1["default"].S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});
