def generate_list_number(max_value):
    list_number = []
    count = 1
    while(count <= max_value):    
        list_number.append(fizzbuzz(count))
        count += 1
    return list_number


def fizzbuzz(number):
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number

print(generate_list_number(20))