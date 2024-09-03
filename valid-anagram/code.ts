function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    const sMap: Map<string, number> = new Map()

    for(const char of s){
        if(sMap.get(char) === undefined){
            sMap.set(char, 1)
        }else{
            sMap.set(char, sMap.get(char)! + 1)
        }
    }

    for(const char of t){

        if(sMap.get(char) === undefined || sMap.get(char)! <= 0){
            return false
        }
        sMap.set(char, sMap.get(char)! - 1)
    }
    return true
};