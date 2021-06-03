import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors
from django.shortcuts import redirect

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]


def main():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "key.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    request = youtube.liveBroadcasts().insert(
        part="snippet,contentDetails,status",
        body={
          "contentDetails": {
            "enableClosedCaptions": True,
            "enableContentEncryption": True,
            "enableDvr": True,
            "enableEmbed": True,
            "recordFromStart": True,
            "startWithSlate": True
          },
          "snippet": {
            "title": "Test broadcast",
            "scheduledStartTime": "2021-06-06T20:30:00",
            "scheduledEndTime": "2021-06-06T21:30:00"
          },
          "status": {
            "privacyStatus": "unlisted"
          }
        }
    )
    response = request.execute()

    print(response)


if __name__ == "__main__":
    main()
