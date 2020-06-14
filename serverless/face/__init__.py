import os
import base64
from uuid import uuid4
import requests
import logging
import azure.functions as func
from azure.storage.blob import BlobClient

try:
    from dotenv import load_dotenv
except:
    pass
else:
    load_dotenv()

KEY = os.environ["FACE_SUBSCRIPTION_KEY"]
ENDPOINT = os.environ["FACE_ENDPOINT"]
HOST = os.environ["HOST"]
CONN_STR = os.environ["CONN_STR"]
CONTAINER = os.environ["STUDENT_CONTAINER"]


def get_facial_attributes(blob_url):
    """Face Dedection API"""

    url = ENDPOINT
    payload = {"url": blob_url}
    headers = {
        'Host': HOST,
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': KEY
    }

    response = requests.post(url, headers=headers, json=payload)
    return response.text


def main(req):

    # return func.HttpResponse('[{"faceId":"6baaa70d-7fcf-4f36-9127-a35c914b28d1","faceRectangle":{"top":340,"left":202,"width":192,"height":139},"faceAttributes":{"age":33.0,"emotion":{"anger":0.0,"contempt":0.0,"disgust":0.0,"fear":0.0,"happiness":0.001,"neutral":0.986,"sadness":0.0,"surprise":0.012}}}]')

    b64_img = req.params.get("b64_img")
    if not b64_img:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            b64_img = req_body.get("b64_img")

    # Validation
    if b64_img and "data:image/png;base64," == b64_img[:22]:

        # New File Name
        file_name = f"{str(uuid4())}.png"

        # Connection
        blob = BlobClient.from_connection_string(
            conn_str=CONN_STR, container_name=CONTAINER, blob_name=file_name,
        )
        # String to Bytes
        bytes = base64.decodebytes(b64_img[22:].encode("utf-8"))

        # Upload
        blob.upload_blob(bytes)

        # ML
        res = get_facial_attributes(blob.url)

        return func.HttpResponse(res)

    # Error Message
    else:
        return func.HttpResponse(
            "Please pass b64_img (png) on the query string or in the request body",
            status_code=400,
        )
