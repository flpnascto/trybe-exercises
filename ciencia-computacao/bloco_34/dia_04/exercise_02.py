def decode_char_into_number(character):
    if character in "ABC":
        return "2"
    elif character in "DEF":
        return "3"
    elif character in "GHI":
        return "4"
    elif character in "JKL":
        return "5"
    elif character in "MNO":
        return "6"
    elif character in "PQRS":
        return "7"
    elif character in "TUV":
        return "8"
    elif character in "WXYZ":
        return "9"
    else:
        return character


def decode_phone_number(expression):
    phonenumber = ""
    for char in expression:
        phonenumber += decode_char_into_number(char)
    return phonenumber

print(decode_phone_number("MY-MISERABLE-JOB"))