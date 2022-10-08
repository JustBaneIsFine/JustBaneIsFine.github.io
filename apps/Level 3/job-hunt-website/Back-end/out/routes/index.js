'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const indexRouter = express_1.default.Router();
/* GET home page. */
indexRouter.get('', function (req, res, next) {
    res.send('it works man!!!!');
    res.render('index', { title: 'Express' });
});
exports.default = indexRouter;
