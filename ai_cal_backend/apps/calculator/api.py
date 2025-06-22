from fastapi import APIRouter
import base64
from io import BytesIO
from apps.calculator.services import analyze_image
from schema import ImageData
from PIL import Image

router = APIRouter()

@router.post('') 
async def run(data: ImageData):
    try:
        imgData = base64.b64decode(data.image.split(",")[1]) 
        imageBytes = BytesIO(imgData)
        image = Image.open(imageBytes)

        responses = analyze_image(image,data.dict_of_vars)
        data = [ans for ans in responses]
        print('ans in route:', data) 
        return {"message": "img process completed", "data": data, "status": "success"}

    except Exception as e:
        print("Error : ", e)
        return {"message": "Error while reading image", "error": str(e), "status": "failed"}
