import {createRequire} from "module"
const require = createRequire(import.meta.url)
const mysql = require("./node_modules/mysql")

const cotnetion = mysql.createConnection({
    host: "localHost"
    
})