function canConstruct(ransomNote: string, magazine: string): boolean {
    let magazineMap: Record<string, number> = {}
    for(const value of magazine){
        if(magazineMap[value] === undefined){
            magazineMap[value] = 1
        }else{
            magazineMap[value] += 1
        }
    }

    for (const value of ransomNote){
        if(magazineMap[value] === 0 || magazineMap[value] === undefined){
            return false
        }
        magazineMap[value] -= 1
    }
    return true
};