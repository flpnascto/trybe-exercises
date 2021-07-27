from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return cls.media([numbers[index], numbers[index - 1]])
        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        numbers_counter = Counter(numbers)
        most_common_number = numbers_counter.most_common(1)
        number, *_ = most_common_number
        return number
