"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
var cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.json([
        {
            header: 'header placeholder',
            postText: 'postText placeholder',
            author: 'author placeholder',
            date: new Date
        },
        {
            header: 'header placeholder2',
            postText: 'postText placeholder2',
            author: 'author placeholder2',
            date: new Date
        }
    ]);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map