// add whatever parameters you deem necessary
function freqCount(str){
    let count = {}
    for(let char of str){
        count[char] = (count[char] + 1) || 1;
    }
    return count;
}

function sameFrequency(num1, num2) {
    const str1 = num1 + "";
    const str2 = num2 + "";
    
    if(str1.length !== str2.length) return false;
    const freq1 = freqCount(str1);
    const freq2 =freqCount(str2);

    for(let key of Object.keys(freq1)){
        if(!freq2[key]) return false;
        if(freq1[key] !== freq2[key]) return false;
    }

    return true;
}