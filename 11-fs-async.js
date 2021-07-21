const { readFile, writeFile, writeFileSync } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return 
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return 
        }
    const second = result;
    writeFile('./content/result-async-files.txt', `${first} ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            } 
            console.log(result)
       })
    })
})