import pytest
from exercise_02 import decode_phone_number


def test_if_expression_return_right_number():
    expression = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    assert decode_phone_number(expression) == "22233344455566677778889999"
