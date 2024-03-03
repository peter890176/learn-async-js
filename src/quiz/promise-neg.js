function negPerRow(arr,rowIdx){
    return new Promise((resolve, reject)=>{
        if(arr.length>rowIdx){
            setTimeout(()=>{
                const hasNegative = arr[rowIdx].some(e => e < 0);
                if (hasNegative) {
                    resolve(`Found Evidence in row ${rowIdx}: ${arr[rowIdx]}`);
                } else {
                    reject(`No negative numbers in row ${rowIdx}`);
                }
            }, 0);
        }
        else{
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`)
        }

    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negPerRowPromise = array2D.map((row, index) => negPerRow(array2D, index));

Promise.any(negPerRowPromise).then((results)=>{
    console.log(results);    
}).catch((error)=> console.log(`Error Msg: ${error}`))