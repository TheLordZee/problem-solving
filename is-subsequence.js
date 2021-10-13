// add whatever parameters you deem necessary
function isSubsequence(str, seq) {
    if(str.length > seq.length) return false;

    let i = 0;
    let j = 0;

    while(i < str.length){
        if(!seq[j]) return false;
        if(str[i] === seq[j]){
            i++;
            j++;
        }else{
            j++;
        }
    }

    return true;
}