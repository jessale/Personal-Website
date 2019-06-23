const express = require('express');
const router = express.Router();
const os = require('os');
const { execSync} = require('child_process');

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
    serverinfo.push({ test : `${test}`});
    console.log(test);

    serverinfo.push({mem : `${os.totalmem()}`});
    serverinfo.push({cpu : `${cpus['0']["model"]}`});
})();




router.get('/', (req, res) => {
    res.status(200).json(serverinfo);
});


module.exports = router;
