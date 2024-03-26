# Transaction API Spec

## Find Transaction by reference
> GET /api/transaction/:reference

Example Success Response
```json
{
  "status": 200,
  "error": null,
  "data": {
    "reference": "T0001000000000000006",
    "merchant_ref": "INV345675",
    "payment_selection_type": "static",
    "payment_method": "BRIVA",
    "payment_name": "BRI Virtual Account",
    "customer_name": "Agilistikmal",
    "customer_email": "agilistikmal@email.com",
    "customer_phone": "081234567890",
    "callback_url": "https://blockstuff.safatanc.com/callback",
    "return_url": "https://blockstuff.safatanc.com/complete",
    "amount": 600000,
    "fee_merchant": 1500,
    "fee_customer": 0,
    "total_fee": 1500,
    "amount_received": 598500,
    "pay_code": "57585748548596587",
    "pay_url": null,
    "checkout_url": "https://tripay.co.id/checkout/T0001000000000000006",
    "status": "UNPAID",
    "expired_time": 1582855837,
    "order_items": [
      {
        "sku": "luckynetwork__lucky",
        "name": "lucky",
        "price": 600000,
        "quantity": 1,
        "subtotal": 600000,
        "product_url": "https://blockstuff.safatanc.com/luckynetwork/lucky",
        "image_url": "https://blockstuff.safatanc.com/images/luckynetwork.png"
      }
    ],
    "instructions": [
      {
        "title": "Internet Banking",
        "steps": [
          "Login ke internet banking Bank BRI Anda",
          "Pilih menu <b>Pembayaran</b> lalu klik menu <b>BRIVA</b>",
          "Pilih rekening sumber dan masukkan Kode Bayar (<b>57585748548596587</b>) lalu klik <b>Kirim</b>",
          "Detail transaksi akan ditampilkan, pastikan data sudah sesuai",
          "Masukkan kata sandi ibanking lalu klik <b>Request</b> untuk mengirim m-PIN ke nomor HP Anda",
          "Periksa HP Anda dan masukkan m-PIN yang diterima lalu klik <b>Kirim</b>",
          "Transaksi sukses, simpan bukti transaksi Anda"
        ]
      }
    ],
    "qr_string": null,
    "qr_url": null
  }
}
```

## Create Transaction
> POST /api/transaction

Example Request
```json
{
  "username": "Agilistikmal",
  "email": "agilistikmal@email.com",
  "server_slug": "luckynetwork",
  "item_slug": "lucky"
}
```

Example Success Response
```json
{
  "status": 200,
  "error": null,
  "data": {
    "reference": "T0001000000000000006",
    "merchant_ref": "INV345675",
    "payment_selection_type": "static",
    "payment_method": "BRIVA",
    "payment_name": "BRI Virtual Account",
    "customer_name": "Agilistikmal",
    "customer_email": "agilistikmal@email.com",
    "customer_phone": "081234567890",
    "callback_url": "https://blockstuff.safatanc.com/callback",
    "return_url": "https://blockstuff.safatanc.com/complete",
    "amount": 600000,
    "fee_merchant": 1500,
    "fee_customer": 0,
    "total_fee": 1500,
    "amount_received": 598500,
    "pay_code": "57585748548596587",
    "pay_url": null,
    "checkout_url": "https://tripay.co.id/checkout/T0001000000000000006",
    "status": "UNPAID",
    "expired_time": 1582855837,
    "order_items": [
      {
        "sku": "luckynetwork__lucky",
        "name": "lucky",
        "price": 600000,
        "quantity": 1,
        "subtotal": 600000,
        "product_url": "https://blockstuff.safatanc.com/luckynetwork/lucky",
        "image_url": "https://blockstuff.safatanc.com/images/luckynetwork.png"
      }
    ],
    "instructions": [
      {
        "title": "Internet Banking",
        "steps": [
          "Login ke internet banking Bank BRI Anda",
          "Pilih menu <b>Pembayaran</b> lalu klik menu <b>BRIVA</b>",
          "Pilih rekening sumber dan masukkan Kode Bayar (<b>57585748548596587</b>) lalu klik <b>Kirim</b>",
          "Detail transaksi akan ditampilkan, pastikan data sudah sesuai",
          "Masukkan kata sandi ibanking lalu klik <b>Request</b> untuk mengirim m-PIN ke nomor HP Anda",
          "Periksa HP Anda dan masukkan m-PIN yang diterima lalu klik <b>Kirim</b>",
          "Transaksi sukses, simpan bukti transaksi Anda"
        ]
      }
    ],
    "qr_string": null,
    "qr_url": null
  }
}
```