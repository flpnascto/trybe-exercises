import json  # json é um modulo que vem embutido, porém precisamos importá-lo
import csv


def read_raw_books(file):
    return [json.loads(line) for line in file]


def count_books_by_category(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def percentage_by_category(categories, total_count):
    percentages = {}
    for category, count in categories.items():
        percentages[category] = count / total_count
    return percentages


def write_data_csv(data):
    with open("percentage.csv", "w") as file:
        writer = csv.writer(file)

    headers = [
        "Category",
        "Percentage",
    ]

    writer.writerow(headers)

    for category, value in data.items():
        row = [category, value]
        writer.writerow(row)
    file.close()


if __name__ == "__main__":
    with open("books") as file:
        books = read_raw_books(file)
    file.close()

    category_count = count_books_by_category(books)

    book_categories_percentage = percentage_by_category(
        category_count, len(books)
    )

    write_data_csv(book_categories_percentage)
