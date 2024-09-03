function canConstructTs(ransomNote: string, magazine: string): boolean {
    let magazineMap: Map<string, number> = new Map()
    for(const char of magazine){
        if(magazineMap.get(char) === undefined){
            magazineMap.set(char, 1)
        }else{
            magazineMap.set(char, magazineMap.get(char)! + 1)
        }
    }

    for (const char of ransomNote){
        if(magazineMap.get(char) === 0 || magazineMap.get(char) === undefined){
            return false
        }
        magazineMap.set(char, magazineMap.get(char)! - 1)
    }
    return true
};