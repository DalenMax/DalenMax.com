---
title: Ton message
description: Ton message
locale: vi-VN
---

# Ton message

This is the complete structure of a message in the TON blockchain.

We work with 2 main parts of the message:

1. `in_msg_full`: Contains the entire message including header
    - First 4 bits are flags
    - Followed by other header parts (source address, destination address, etc.)
2. `in_msg_body`: Contains only the message body, excluding header
    - First 32 bits are op code
    - Followed by query_id (64 bits)
    - Finally the parameters

Vì vậy, khi chúng ta load 32 bits từ `in_msg_body`, chúng ta đang lấy toàn bộ 32 bits cho op code, không bị ảnh hưởng bởi flags trong header vì header và body là hai phần riêng biệt của message.

Sơ đồ cấu trúc:

```
Copy
Message Full (in_msg_full)
├── Header
│   ├── Flags (4 bits)
│   ├── IHR flags (4 bits)
│   ├── Source address (32 bits)
│   ├── Destination address (32 bits)
│   └── Import fee (64 bits)
│
└── Body (in_msg_body)
    ├── Op code (32 bits đầy đủ)
    ├── Query ID (64 bits)
    └── Parameters

```

Message Header trong TON có cấu trúc như sau:

```
Copy
1. Message Header (Phần đầu của message):

bits 0-3   (4 bits): flags
    - bit 0: bounce flag
    - bit 1: bounced flag
    - bit 2: pay external flag
    - bit 3: reserved for future

bits 4-7   (4 bits): ihr_disabled, bounce, bounced flags

bits 8-39  (32 bits): source address (địa chỉ nguồn)
    - addr_none: 00
    - addr_ext: 01
    - addr_std: 10
    - addr_var: 11

bits 40-71 (32 bits): destination address (địa chỉ đích)
    - Cùng format như source address

bits 72-135 (64 bits): import fee (phí)

2. Message Body:

bits 136-167 (32 bits): function selector/op code
    - Định danh cho function được gọi

bits 168-231 (64 bits): query_id
    - ID của request

Sau đó là payload chính của message (tham số của function)

```

Ví dụ khi parse một message:

```
fc
Copy
slice cs = in_msg_full.begin_parse();
int flags = cs~load_uint(4);           ;; Load 4 bits flags
int ihr_flags = cs~load_uint(4);       ;; Load 4 bits ihr flags
slice src_addr = cs~load_msg_addr();   ;; Load source address (32 bits)
slice dst_addr = cs~load_msg_addr();   ;; Load dest address (32 bits)
int import_fee = cs~load_coins();      ;; Load import fee (64 bits)

;; Parse message body
int op = cs~load_uint(32);             ;; Load function selector
int query_id = cs~load_uint(64);       ;; Load query ID

```

Một số điểm quan trọng:

1. Address trong TON có thể có nhiều loại khác nhau:
    - addr_none (00): Không có địa chỉ
    - addr_ext (01): Địa chỉ external
    - addr_std (10): Địa chỉ standard
    - addr_var (11): Địa chỉ variable length
2. Import fee là số coin cần thiết để xử lý message
3. Function selector/op code cho biết contract function nào sẽ được gọi
4. Query ID thường được sử dụng để theo dõi và match các response với request tương ứng

Ví dụ về cách một message thực tế có thể trông như thế nào (dạng bit):

```
Copy
0001                // flags (4 bits)
0000                // ihr_flags (4 bits)
10...               // source addr (32 bits)
10...               // dest addr (32 bits)
000...              // import fee (64 bits)
7e8764ef            // op code (32 bits) - ví dụ increase function
0000000000000001    // query id (64 bits)
...                 // payload

```

```jsx
int flags = cs~load_uint(4);

    if (flags & 1) { ;; ignore all bounced messages
        return ();
    }
```

Số 4 trong `load_uint(4)` đại diện cho số lượng bit sẽ được đọc từ slice. Trong trường hợp này, đọc 4 bit đầu tiên của message vì đây là độ dài chuẩn của trường flags trong message header của TON blockchain.

Hãy xem cấu trúc của message header trong TON:

```
Copy
bits 0-3   (4 bits): flags
bit 0: bounce flag
bit 1: bounced flag
bit 2: pay external
bit 3: không sử dụng (reserved for future use)

```

Vì vậy:

1. Trường flags chiếm 4 bit đầu tiên của message
2. Mỗi bit trong 4 bit này có ý nghĩa riêng:
    - Bit 0 (LSB): bounce flag - cho biết message có thể bounce hay không
    - Bit 1: bounced flag - cho biết message này đã bị bounce chưa
    - Bit 2: pay external flag - liên quan đến thanh toán external
    - Bit 3: dự phòng cho tương lai

Ví dụ một giá trị flags:

```
Copy
0011 (binary)
- Bit 0 = 1: message có thể bounce
- Bit 1 = 1: message đã bị bounce
- Bit 2 = 0: không phải external payment
- Bit 3 = 0: bit dự phòng

```

Đó là lý do tại sao chúng ta cần đọc chính xác 4 bit - không nhiều hơn hay ít hơn, vì đây là kích thước chuẩn của trường flags trong message header của TON blockchain.

/
