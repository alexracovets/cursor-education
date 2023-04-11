async function getRandomChinese(length) { 
    let result = '';

    for (let i = 0; i < length; i++) {
        const now = Date.now();
        const sign = String.fromCharCode(now % 100000);
        result += sign;
        await new Promise(resolve => setTimeout(resolve, 50));
    }
 
    console.log(result) 
    return result;
}

getRandomChinese(5)