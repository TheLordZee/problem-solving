// add whatever parameters you deem necessary
function freqCount(str){
    let count = {}
    for(let char of str){
        count[char] = (count[char] + 1) || 1;
    }
    return count;
}

function constructNote(msg, letters) {
    if(msg.length > letters.length) return false;
    const msgFreq = freqCount(msg);
    const letFreq = freqCount(letters);

    for(let key of Object.keys(msgFreq)){
        if(msgFreq[key] > letFreq[key]) return false;
    }

    return true;
}