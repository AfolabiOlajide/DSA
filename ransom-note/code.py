class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        magazineCount = {}

        for value in magazine:
            if value not in magazineCount:
                magazineCount[value] = 1
            else:
                magazineCount[value] += 1

        for value in ransomNote:
            if value not in magazineCount or magazineCount[value] <= 0 :
                return False
            else:
                magazineCount[value] -= 1
        return True