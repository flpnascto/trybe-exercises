from fizzbuzz import fizzbuzz, generate_list_number


def test_fizzbuzz_should_return_fizz():
    assert fizzbuzz(3) == "Fizz"


def test_fizzbuzz_should_return_buzz():
    assert fizzbuzz(5) == "Buzz"


def test_fizzbuzz_should_return_fizzbuzz():
    assert fizzbuzz(15) == "FizzBuzz"


def test_generate_list_number_should_return_only_number():
    assert generate_list_number(2) == [1,2]


def test_generate_list_number_should_return_numbers_and_strings():
    assert generate_list_number(15) == [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
