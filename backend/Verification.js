var nm = require('nodemailer')
let trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'sbtankariya@gmail.com',
        pass: 'qfdlyvkpdqlxchal',
    },
});

trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(info)
    }
})