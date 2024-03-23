# Server API Spec

## Find All Server
> GET /api/server

Example Success Response
```
{
  status: 200,
  error: null,
  data: [
    {
      id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
      slug: "luckynetwork",
      ip: "play.luckynetwork.net",
      name: "LuckyNetwork SEA",
      logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
      website: "https://luckynetwork.net",
      discord: "https://discord.gg/luckynet"
    }
  ]
}
```

## Find Server by slug
> GET /api/server/:slug

Example Success Response
```
{
  status: 200,
  error: null,
  data: {
    id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
    slug: "luckynetwork",
    ip: "play.luckynetwork.net",
    name: "LuckyNetwork SEA",
    logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
    website: "https://luckynetwork.net",
    discord: "https://discord.gg/luckynet"
  }
}
```

Example Error Response (Not Found)
```
{
  status: 404,
  error: "server with slug abc not found",
  data: null
}
```

## Add Server
> POST /api/server

Example Request
```
{
  id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
  slug: "luckynetwork",
  ip: "play.luckynetwork.net",
  name: "LuckyNetwork SEA",
  logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
  website: "https://luckynetwork.net",
  discord: "https://discord.gg/luckynet"
}
```

Example Success Response
```
{
  status: 200,
  error: null,
  data: {
    id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
    slug: "luckynetwork",
    ip: "play.luckynetwork.net",
    name: "LuckyNetwork SEA",
    logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
    website: "https://luckynetwork.net",
    discord: "https://discord.gg/luckynet"
  }
}
```

## Edit Server by slug
> PUT /api/server/:slug

Example Request
```
{
  ip: "play.luckynetwork.id",
  website: "https://luckynetwork.id"
}
```

Example Success Response
```
{
  status: 200,
  error: null,
  data: {
    id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
    slug: "luckynetwork",
    ip: "play.luckynetwork.id",
    name: "LuckyNetwork SEA",
    logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
    website: "https://luckynetwork.id",
    discord: "https://discord.gg/luckynet"
  }
}
```

## Delete Server by slug
> DELETE /api/server/:slug

Example Success Response
```
{
  status: 200,
  error: null,
  data: null
}
```