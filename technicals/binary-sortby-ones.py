# this function takes in a array of integers and should convert
# them to their binary eqvalants and sort them by the number of ones 

# example:
# [7,5,6,4] is [111, 101,110,100]
# then sort the array by the number of ones 
# 111 has three ones but in the event of a tie 
# like in 101 and 110 
# it should sort those by value since 110 is greater than 101 
# sorted array should be:
# [100,101,110,111]
# the function should return :
# [4,5,6,7]

def binary_sortby_ones (arr):
    # Convert integers to binary strings
    binary_arr = [format(num, 'b') for num in arr]

    # Sort the binary strings by the number of ones, then by value in case of ties
    binary_arr.sort(key=lambda x: (x.count('1'), int(x, 2)))
    print(binary_arr)
    # Convert the binary strings back to integers
    sorted_arr = [int(num, 2) for num in binary_arr]

    return sorted_arr


print(binary_sortby_ones([7, 5, 6, 4])) # should return [4, 5, 6, 7]