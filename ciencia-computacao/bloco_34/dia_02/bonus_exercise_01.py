def find_lesser_number(number_list):
    lesser_number = number_list[0]
    for number in number_list:
        if number < lesser_number:
            lesser_number = number
    return lesser_number


list_number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(find_lesser_number(list_number))
