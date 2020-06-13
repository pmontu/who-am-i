# What is my age?

- Mobile App using react and react-html5-camera-photo
- Base 64 Png Image string is saved on Azure as a binary png image blob
- Azure Face Detect returns age in json of image from url

## Local Setup

Backend

create `serverless/face/.env` with below details filled.

```
CONN_STR=DefaultEndpointsProtocol=https;AccountName=<...>;AccountKey=<...>;EndpointSuffix=core.windows.net
STUDENT_CONTAINER=<...>
FACE_SUBSCRIPTION_KEY=<...>
FACE_ENDPOINT=https://<...>.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,emotion
HOST=<...>.cognitiveservices.azure.com
```

```
cd serverless
func start
```

Frontend

```
cd frontend
yarn
yarn start
```
