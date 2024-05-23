// function addAndLog(x,y){
//     let result = x + y;
//     console.log('result: ', result);
//     return result;
// }

// function multiplyAndLog(x,y){
//     let result = x * y;
//     console.log('result: ', result);
//     return result;
// }

// function divideAndLog(x,y){
//     let result = x / y;
//     console.log('result: ', result);
//     return result;
// }


function withLogging(wrapperFunc){
    return function(a,b){
        const result = wrapperFunc(a,b);
        console.log('result: ', result);
        return result;
    }
}

const add =(x,y) => x+y
const addWithLogging = withLogging(add)

const divideAndLog = withLogging((a,b) => a/b)