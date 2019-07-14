const express = require('express');
const router = express.Router();
const os = require('os');
const { execSync} = require('child_process');
const process = require('process');

const serverinfo = [];


(() => {
    // array to object
    let cpus = os.cpus().reduce((acc, cur, i) => {
        acc[i] = cur;
        return acc;
    }, {});

    // console.log(cpus);
    // console.log(typeof(cpus));
    let test = execSync('uname -a');

    const used = Math.floor(execSync("free | grep Mem | awk '{print $3/$2 * 100.0}'"));
    console.log(used);
    serverinfo.push({ test : `${test}`});

    serverinfo.push({mem : `${used}`});
    serverinfo.push({cpu : `${cpus['0']["model"]}`});
})();




router.get('/', (req, res) => {
    res.status(200).json(serverinfo);
});


module.exports = router;
