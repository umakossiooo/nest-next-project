import csv
import requests
import time
import os
import sys

# Get base URL from environment variable or command-line argument
BASE_URL = os.getenv("API_URL") or (sys.argv[1] if len(sys.argv) > 1 else None)
if not BASE_URL:
    print("Error: You must provide the backend base URL via the 'API_URL' environment variable or as a command-line argument.")
    sys.exit(1)

PRODUCTS_ENDPOINT = BASE_URL
CSV_FILE = "products.csv"

def read_products(csv_file):
    products = []
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            product = {
                "name": row["name"],
                "price": float(row["price"])
            }
            # Add category only if it's included in the CSV and not empty
            if "category" in row and row["category"].strip():
                product["category"] = row["category"]
            products.append(product)
    return products

def send_product(product):
    for attempt in range(2):  # Retry once if request fails
        try:
            response = requests.post(PRODUCTS_ENDPOINT, json=product, timeout=5)
            if response.status_code == 201:
                print(f"Product inserted: {product['name']}")
                return True
            else:
                print(f"Failed to insert {product['name']}: {response.status_code} - {response.text}")
                return False
        except requests.RequestException as e:
            print(f"Connection error: {e}")
            if attempt == 0:
                print("Retrying...")
                time.sleep(2)
            else:
                print("Failed to connect after retrying.")
                return False

def main():
    products = read_products(CSV_FILE)
    print(f"Processing {len(products)} products...")
    for product in products:
        send_product(product)

if __name__ == "__main__":
    main()