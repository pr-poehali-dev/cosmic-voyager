"""Отправка заявки на строительство каркасного дома на почту"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    project = body.get("project", "").strip()
    comment = body.get("comment", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    from_email = "saity.zakaz@yandex.ru"
    to_email = "saity.zakaz@yandex.ru"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта КаркасДом — {name}"
    msg["From"] = from_email
    msg["To"] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 12px;">
            Новая заявка с сайта КаркасДом
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px 0; color: #666; width: 140px;">Имя:</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: bold;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 10px 0; color: #666;">Телефон:</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: bold;">{phone}</td>
            </tr>
            {"<tr><td style='padding: 10px 0; color: #666;'>Проект:</td><td style='padding: 10px 0; color: #1a1a1a;'>" + project + "</td></tr>" if project else ""}
            {"<tr><td style='padding: 10px 0; color: #666;'>Комментарий:</td><td style='padding: 10px 0; color: #1a1a1a;'>" + comment + "</td></tr>" if comment else ""}
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Заявка отправлена с сайта КаркасДом
        </p>
    </div>
    """

    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True}),
    }