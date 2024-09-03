/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = new Map()
    for(const value of magazine){
        if(magazineCount.get(value) === undefined){
            magazineCount.set(value, 1)
        }else{
            magazineCount.set(value, magazineCount.get(value) + 1)
        }
    }

    for(const value of ransomNote){
        if(magazineCount.get(value) === undefined || magazineCount.get(value) <= 0){
            return false
        }
        magazineCount.set(value, magazineCount.get(value) - 1)
    }

    return true
};