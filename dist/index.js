"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokens = exports.TokenProvider = exports.whiteLabelTokens = void 0;
__exportStar(require("./atoms"), exports);
var design_system_tokens_1 = require("design-system-tokens");
Object.defineProperty(exports, "whiteLabelTokens", { enumerable: true, get: function () { return design_system_tokens_1.whiteLabelTokens; } });
var design_system_context_1 = require("design-system-context");
Object.defineProperty(exports, "TokenProvider", { enumerable: true, get: function () { return design_system_context_1.TokenProvider; } });
Object.defineProperty(exports, "useTokens", { enumerable: true, get: function () { return design_system_context_1.useTokens; } });
