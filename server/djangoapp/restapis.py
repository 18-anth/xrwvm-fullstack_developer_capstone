# Uncomment the imports below before you add the function code
import requests
import os
from dotenv import load_dotenv

load_dotenv()

backend_url = os.getenv("backend_url", default="http://localhost:3030")
sentiment_analyzer_url = os.getenv(
    "sentiment_analyzer_url", default="http://localhost:5050/"
)


def get_request(endpoint, **kwargs):
    params = ""

    if kwargs:
        for key, value in kwargs.items():
            params += f"{key}={value}&"

    request_url = backend_url.rstrip("/") + endpoint + "?" + params

    print("GET from", request_url)

    try:
        response = requests.get(request_url)

        print("Status:", response.status_code)
        print("Response:", response.text)

        response.raise_for_status()

        return response.json()

    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")

    except ValueError:
        print("Response is not valid JSON.")
        print(response.text)


# Add code for get requests to back end


def analyze_review_sentiments(text):
    request_url = f"{sentiment_analyzer_url}/analyze/{text}"

    try:
        print("REQUEST:", request_url)
        response = requests.get(request_url)
        response.raise_for_status()
        return response.json()

    except Exception as err:
        print(err)
        return None


# Add code for retrieving sentiments


def post_review(data_dict):
    request_url = backend_url + "/insert_review"
    try:
        response = requests.post(request_url, json=data_dict)
        print(response.json())
        return response.json()
    except Exception as e:
        print(e + "Network exception occurred")


# Add code for posting review
