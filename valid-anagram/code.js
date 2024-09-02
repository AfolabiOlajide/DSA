/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const sMap = {}

    for(const char of s){
        if(sMap[char] === undefined){
            sMap[char] = 1
        }else{
            sMap[char] += 1
        }
    }
    console.log(sMap)

    for(const char of t){
        if(sMap[char] === undefined || sMap[char] <= 0){
            console.log(sMap)
            return false
        }
        sMap[char] -= 1
    }

    return true
};