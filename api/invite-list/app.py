import boto3
from boto3.dynamodb.conditions import Attr
from os import getenv
import json

region_name = getenv("APP_REGION")
table = boto3.resource("dynamodb", region_name=region_name).Table(
    "DailyCheckers_Invites_SAM"
)


def lambda_handler(event, context):

    if "pathParameters" in event:

        path = event["pathParameters"]
        if path is None or "id" not in path:
            return response(404, {"error": "No ID specified"})

        id = event["pathParameters"]["id"]
        invites = table.scan(FilterExpression=Attr("to").eq(id))

        if invites["Count"] == 0:
            return response(200, {"body": "No invites found"})
        else:
            return response(200, invites["Items"])

    return response(200, table.scan()["Items"])


def response(code, body):
    return {
        "statusCode": code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
        },
        "body": json.dumps(body),
        "isBase64Encoded": False,
    }
