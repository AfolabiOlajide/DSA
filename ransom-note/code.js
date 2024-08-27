/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = {}
    for(const value of magazine){
        if(magazineCount[value] === undefined){
            magazineCount[value] = 1
        }else{
            magazineCount[value] += 1
        }
    }

    for(const value of ransomNote){
        if(magazineCount[value] === undefined || magazineCount[value] <= 0){
            return false
        }
        magazineCount[value] -= 1
    }

    return true
};