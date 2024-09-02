function isAnagramTs(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    const sMap: Record<string, number> = {}

    for(const char of s){
        if(sMap[char] === undefined){
            sMap[char] = 1
        }else{
            sMap[char] += 1
        }
    }

    for(const char of t){
        if(sMap[char] === undefined || sMap[char] <= 0){
            return false
        }
        sMap[char] -= 1
    }

    return true
};