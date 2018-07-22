# Given a list of integers,return true if the sequence of numbers 1,2,3 appears in the list somewhere.
def arrayChecks(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i+2] == 3:
            return true
        return false

# Given a string, return a new string made of every other character starting with the first, so "Hello" yields "Hlo"
def strings(mysytring):
    result = ""
    for i in range(len(mysytring)):
        if i % 2 == 0:
            result = result + mysytring[i]
    return result

# Given two strings, return True if either of the strings appears at the very end of the other string, ignoring upper/lower case differences.
def endString(a,b):
    a = a.lower()
    b= b.lower()
    # return (b.endswith(a) or a.endswith(b)) or
    return a[-(ken(b)):] == b or a ==b[-len(a):]

# Given a string, return a string where for every characters in the original, there are characters
# examples = doubleChar("the") = "TThhee", doubleChar("AAbb") = "AAAbbb"
def doubleChar(mystring):
    result = ""
    for char in mystring:
        result += char*2
    return result

# Given 3 integers, return the sum. However if any of the values is teen, in the range 13-19 inclusive, then that value counts as 0. 15 and 16 dont count as teens.
# write a helper function that in a integer value and returns that value fixed for the teen rule.
def no_teen_sum(a,b,c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    if n[13,14,17,18,19]:
        return 0
    return n

# Return the number of even integers in the given array.
def even_num(nums):
    count = 0
    for element in nums:
        if element % 2 == 0:
            count += 1
    return count
