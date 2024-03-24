# Server RCON API Spec

## Get Server RCON
> GET /api/server/:slug/rcon

Example Response
```
{
  "status": 200,
  "error": null,
  "data": {
    "id": "bd2ebff2-03c2-40e4-94c4-617394434df6",
    "slug": "luckynetwork",
    "ip": "play.luckynetwork.net",
    "name": "LuckyNetwork",
    "website": "https://www.luckynetwork.net",
    "discord": null,
    "logo": "https://static.wikia.nocookie.net/minecraftid/images/3/3a/Lucky_Network.png/revision/latest?cb=20230103115650&path-prefix=id",
    "rcon_id": "b665c97e-4134-4a38-b6d8-1c502ad5adf8",
    "rcon": {
      "id": "b665c97e-4134-4a38-b6d8-1c502ad5adf8",
      "ip": "play.luckynetwork.net",
      "port": 25575,
      "password": "p4ssw0rd"
    }
  }
}
```