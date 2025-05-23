# 🏦 banking-playwright-tests

Automated UI and API test suite for a fictional banking application using Python, Playwright, and Pytest.

## 📌 About the Project

This project demonstrates best practices in automated testing for modern web applications:
- End-to-end UI tests using Playwright
- REST API tests using requests
- Page Object Model (POM) architecture
- External test data in JSON format
- HTML test reports with `pytest-html`
- Optional Docker support for isolated runs

---

## 📁 Project Structure

```
banking-playwright-tests/
├── tests/                 # UI and API tests
├── pages/                 # Page Object classes
├── utils/                 # Helpers and API client
├── data/                  # JSON test data
├── requirements.txt       # Python dependencies
├── pytest.ini             # Pytest configuration
├── Dockerfile             # (Optional) Docker test execution
├── README.md              # Project documentation
```

---

## 🚀 Getting Started

### 🔧 Install dependencies

```bash
pip install -r requirements.txt
```

### 🌐 Install Playwright browsers

```bash
playwright install
```

### 🧪 Run tests with HTML report

```bash
pytest --html=report.html --self-contained-html
```

The report will be saved as `report.html`.

---

## 🧪 Example Test Cases

- `test_login.py`: UI login and dashboard check
- `test_transfer.py`: Simulated money transfer
- `test_api_accounts.py`: API validation of account data

---

## 🐳 Run with Docker (optional)

```bash
docker build -t banking-tests .
docker run --rm -v ${PWD}:/app banking-tests
```

---

## 📄 Tech Stack

- Python 3.10+
- Playwright
- Pytest
- Requests
- Docker (optional)

---

## 👤 Author

**Kasper Kott**  
[github.com/kasperkott](https://github.com/kasperkott)
