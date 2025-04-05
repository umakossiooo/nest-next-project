### Commands to execute for the import_products:
```bash
pip install spacy
python -m spacy download en_core_web_sm

$env:API_URL = "http://localhost:8000/api/products/create"
python import_products.py
```

### Commands to execute for the categorization.py:
```bash
python -m venv venv         
pip install requests

.\venv\Scripts\activate
python categorization.py
```
