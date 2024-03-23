# Server Item API Spec

## Find All Server Item
> GET /api/server/:slug/item

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
    discord: "https://discord.gg/luckynet",
    items: [
      {
        id: "89f6f2e1-4e8e-40ec-b778-dcb5a6794f57",
        slug: "vip-rank",
        title: "VIP Rank",
        description: "VIP Rank",
        features: [
          {
            id: "28f3bca3-1039-4743-83c2-ae6a2cabcb5a",
            name: "Unlimited Fly on Skyblock",
          }
        ],
        type: "rank",
        price: 100000,
        stock: -1,
        sold: 0
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
  status: 200,
  error: null,
  data: {
    id: "f5b1140c-e499-4ae6-8ace-05bce9a0dd24",
    slug: "luckynetwork",
    ip: "play.luckynetwork.id",
    name: "LuckyNetwork SEA",
    logo: "https://blockstuff.safatanc.com/image/server/luckynetwork.png",
    website: "https://luckynetwork.id",
    discord: "https://discord.gg/luckynet",
    items: {
      id: "89f6f2e1-4e8e-40ec-b778-dcb5a6794f57",
      slug: "vip-rank",
      title: "VIP Rank",
      description: "VIP Rank",
      features: [
        {
          id: "28f3bca3-1039-4743-83c2-ae6a2cabcb5a",
          name: "Unlimited Fly on Skyblock",
        }
      ],
      type: "rank",
      price: 100000,
      stock: -1,
      sold: 0
    }
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
  sold: 0
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
    discord: "https://discord.gg/luckynet",
    items: {
      id: "89f6f2e1-4e8e-40ec-b778-dcb5a6794f57",
      slug: "vip-rank",
      title: "VIP Rank",
      description: "VIP Rank",
      features: [
        {
          id: "28f3bca3-1039-4743-83c2-ae6a2cabcb5a",
          name: "Unlimited Fly on Skyblock",
        }
      ],
      type: "rank",
      price: 100000,
      stock: -1,
      sold: 0
    }
  }
}
```

## Edit Server Item by slug
> PUT /api/server/:slug/item/:slug

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
  sold: 0
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