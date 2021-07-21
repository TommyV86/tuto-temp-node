const os = require('os')

// info about current user
const user = os.userInfo()

// method return the system uptime in sec
console.log(`time sys is ${os.uptime()} secs`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)