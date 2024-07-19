const testPromise = new Promise ((passed, failed) => {
const grade = 75
let score = 70

if ( grade <= score) {passed('You passed this semester')
} else {
    failed('You failed this semster')
}
})

testPromise.then((message) => {
    console.log('this is then ' + message)
}).catch((message)=>{console.log('this is catch ' + message)})

