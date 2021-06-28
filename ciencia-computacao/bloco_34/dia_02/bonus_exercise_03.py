def summation(NUMBER):
    i, sum = 0, 0
    while i <= NUMBER:
        sum += i
        i += 1
    return sum


print(summation(5))
