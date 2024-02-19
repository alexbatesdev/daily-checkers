import boto3
from boto3.dynamodb.conditions import Key
from os import getenv
import json

region_name = getenv("APP_REGION")
table = boto3.resource("dynamodb", region_name=region_name).Table("DailyCheckers_Users")


def lambda_handler(event, context):
    # require verification?

    id = event["id"]

    response = table.query(
        KeyConditionExpression=Key("id").eq(id),
    )

    if response["Count"] == 0:
        return response(404, {"error": "User not found"})
    else:
        user = response["Items"][0]
        table.delete_item(Key={"id": user["id"]})
        return response(200, {"message": "User deleted"})


def response(code, body):
    return {
        "statusCode": code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
        "isBase64Encoded": False,
    }
