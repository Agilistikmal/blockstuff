# Server Item API Spec

## Find All Server Item
> GET /api/server/:slug/item

Example Success Response
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
    "items": [
      {
        "id": "b9b393cb-b898-47f0-91b1-2f70f23001d7",
        "slug": "lucky-rank",
        "server_slug": "luckynetwork",
        "title": "Lucky Rank",
        "description": "Lucky Rank",
        "type": "rank",
        "price": 600000,
        "stock": -1,
        "sold": 0,
        "commands": [
          "say Hello Test 1",
          "say Hello Test 2"
        ],
        "features": [
          {
            "id": "3196fc54-17cf-4106-9c89-078ca32deba5",
            "name": "All perks from MVP",
            "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
          },
          {
            "id": "c2d7e986-f1e9-4083-9ec7-f8cb2d54d0f6",
            "name": "Custom Prefix",
            "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
          }
        ]
      }
    ]
  }
}
```

## Find Server Item by slug
> GET /api/server/:slug/item/:slug

Example Success Response
```
{
  "status": 200,
  "error": null,
  "data": {
    "id": "b9b393cb-b898-47f0-91b1-2f70f23001d7",
    "slug": "lucky-rank",
    "server_slug": "luckynetwork",
    "title": "Lucky Rank",
    "description": "Lucky Rank",
    "type": "rank",
    "price": 600000,
    "stock": -1,
    "sold": 0,
    "commands": [
      "say Hello Test 1",
      "say Hello Test 2"
    ],
    "features": [
      {
        "id": "3196fc54-17cf-4106-9c89-078ca32deba5",
        "name": "All perks from MVP",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      },
      {
        "id": "c2d7e986-f1e9-4083-9ec7-f8cb2d54d0f6",
        "name": "Custom Prefix",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      }
    ]
  }
}
```

Example Error Response (Not Found)
```
{
  status: 404,
  error: "server item with slug abc-rank not found",
  data: null
}
```

## Add Server Item
> POST /api/server/:slug/item

Example Request
```
{
  slug: "vip-rank",
  title: "VIP Rank",
  description: "VIP Rank",
  features: [
    {
      name: "Unlimited Fly on Skyblock",
    }
  ],
  type: "rank",
  price: 100000,
  stock: -1,
  sold: 0,
  commands: [
    "say Hello 123",
    "say Hello 789"
  ]
}
```

Example Success Response
```
{
  "status": 200,
  "error": null,
  "data": {
    "id": "b9b393cb-b898-47f0-91b1-2f70f23001d7",
    "slug": "lucky-rank",
    "server_slug": "luckynetwork",
    "title": "Lucky Rank",
    "description": "Lucky Rank",
    "type": "rank",
    "price": 600000,
    "stock": -1,
    "sold": 0,
    "commands": [
      "say Hello 123",
      "say Hello 789"
    ],
    "features": [
      {
        "id": "3196fc54-17cf-4106-9c89-078ca32deba5",
        "name": "All perks from MVP",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      },
      {
        "id": "c2d7e986-f1e9-4083-9ec7-f8cb2d54d0f6",
        "name": "Custom Prefix",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      }
    ]
  }
}
```

## Edit Server Item by slug
> PUT /api/server/:slug/item/:slug

Example Request
```
{
  price: 800000
}
```

Example Success Response
```
{
  "status": 200,
  "error": null,
  "data": {
    "id": "b9b393cb-b898-47f0-91b1-2f70f23001d7",
    "slug": "lucky-rank",
    "server_slug": "luckynetwork",
    "title": "Lucky Rank",
    "description": "Lucky Rank",
    "type": "rank",
    "price": 800000,
    "stock": -1,
    "sold": 0,
    "commands": [
      "say Hello 123",
      "say Hello 789"
    ],
    "features": [
      {
        "id": "3196fc54-17cf-4106-9c89-078ca32deba5",
        "name": "All perks from MVP",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      },
      {
        "id": "c2d7e986-f1e9-4083-9ec7-f8cb2d54d0f6",
        "name": "Custom Prefix",
        "item_id": "b9b393cb-b898-47f0-91b1-2f70f23001d7"
      }
    ]
  }
}
```

## Detele Server Item by slug
> DELETE /api/server/:slug/item/:slug

Example Success Response
```
{
  status: 200,
  error: null,
  data: null
}
```