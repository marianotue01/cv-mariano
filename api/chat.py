# api/chat.py  (en la raíz del proyecto o en src/backend/api/chat.py si lo configuras)

import os
import requests

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def handler(request):
    if request["method"] != "POST":
        return {
            "statusCode": 405,
            "body": '{"error": "Método no permitido"}',
            "headers": {"Content-Type": "application/json"},
        }

    try:
        body = request.get("body", {})
        question = body.get("question")
        system_prompt = body.get("systemPrompt")

        if not question or not system_prompt:
            return {
                "statusCode": 400,
                "body": '{"error": "Falta pregunta o prompt"}',
                "headers": {"Content-Type": "application/json"},
            }

        if not OPENROUTER_API_KEY:
            return {
                "statusCode": 500,
                "body": '{"error": "Falta OPENROUTER_API_KEY"}',
                "headers": {"Content-Type": "application/json"},
            }

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": question},
                ],
            },
            timeout=60,
        )

        data = response.json()

        if "choices" in data and len(data["choices"]) > 0:
            return {
                "statusCode": 200,
                "body": '{"answer": "' + data["choices"][0]["message"]["content"].strip().replace('"', '\\"') + '"}',
                "headers": {"Content-Type": "application/json"},
            }
        else:
            return {
                "statusCode": 500,
                "body": '{"error": "Respuesta vacía del modelo"}',
                "headers": {"Content-Type": "application/json"},
            }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": '{"error": "Error generando respuesta: ' + str(e).replace('"', '\\"') + '"}',
            "headers": {"Content-Type": "application/json"},
        }
