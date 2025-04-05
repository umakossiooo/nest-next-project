import spacy

# Load the English NLP model
nlp = spacy.load("en_core_web_sm")

def classify_product(description: str) -> str:

    doc = nlp(description.lower())
    keywords = {
        "technology": ["laptop", "smartphone", "tablet"],
        "clothing": ["shirt", "pant", "shoe"],
        "food": ["apple", "bread", "milk"],
    }

    lemmas = [token.lemma_ for token in doc]

    for category, words in keywords.items():
        if any(word in lemmas for word in words):
            return category

    return "others"

if __name__ == "__main__":
    description = "This is an amazing apple pie recipe."
    category = classify_product(description)
    print(f"The product category is: {category}")
