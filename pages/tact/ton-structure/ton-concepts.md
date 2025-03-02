---
title: Ton concepts
description: Ton concepts
locale: vi-VN
---

# The Open Network

> - Tài liệu này tổng hợp những kiến thức nền tảng quan trọng nhất về TON, được đúc kết từ quá trình nghiên cứu chuyên sâu của tác giả.
> - Tài liệu phù hợp với các nhà phát triển đã có kinh nghiệm với các nền tảng blockchain và các khái niệm như `Blockchain`, `Sharding` và `Directed Acyclic Graph (DAG)`... Nếu bạn chưa quen thuộc với những khái niệm này, hãy dành thời gian tìm hiểu [tại đây](https://google.com) trước khi tiếp tục.

The Open Network (TON) là một trong những blockchain thế hệ mới đang nhận được nhiều sự quan tâm từ cộng đồng phát triển.
## 1. Blockchain of Blockchains

![Visual helper](/excalidraw/TON-concept-1.excalidraw.png)

![Visual helper](/excalidraw/TON-concept-2.excalidraw.png)

| **Level**       | **Description**  |
| --------------- | ---------------- |
| `Account Chain` | The lowest level |
| `Shard Chain`   | The next level   |
| `Work Chain`    | A higher level   |
| `Master Chain`  | The highet level |
### 1.1 Account Chain

#### Khái niệm AccountChain

- Mỗi tài khoản hoặc hợp đồng thông minh trong TON có một chuỗi giao dịch riêng gọi là AccountChain.
- AccountChain là một chuỗi các giao dịch liên tiếp liên quan đến một tài khoản cụ thể. (chú ý điểu này)
#### Cấu trúc của AccountChain

- Gồm các giao dịch được sắp xếp theo thứ tự thời gian.
- Mỗi giao dịch trong chuỗi liên kết với giao dịch trước đó.

#### Tính độc lập

- Mỗi AccountChain hoạt động độc lập với các AccountChain khác.
- Các giao dịch trong một AccountChain không ảnh hưởng trực tiếp đến các AccountChain khác.

#### Lợi ích của cấu trúc này

**a) Xử lý song song:** Cho phép xử lý đồng thời nhiều AccountChain, tăng hiệu suất của hệ thống.

**b) Cô lập dữ liệu:** Giúp cô lập các vấn đề, hạn chế ảnh hưởng của lỗi từ một tài khoản sang tài khoản khác.

**c) Quản lý trạng thái:** Dễ dàng theo dõi và quản lý trạng thái của từng tài khoản riêng biệt.

#### Ưu điểm so với các blockchain khác

- Nhiều blockchain khác sử dụng một chuỗi giao dịch duy nhất cho tất cả tài khoản, có thể dẫn đến tắc nghẽn.
- Cấu trúc AccountChain của TON giúp giảm tắc nghẽn và tăng khả năng mở rộng.

### 1.2. Shard Chain

ShardChain là một chuỗi blockchain con trong hệ thống TON, chứa một tập hợp các AccountChain có cùng tiền tố địa chỉ.

##### Định nghĩa và Cấu trúc

- Mỗi ShardChain bao gồm nhiều AccountChain có cùng tiền tố địa chỉ
- Mỗi ShardChain được xác định bằng một ID 64-bit: <tiền tố nhị phân>100000...

#### Chức năng chính

- Lưu trữ trạng thái và lịch sử giao dịch của các tài khoản
- Xử lý các giao dịch liên quan đến tài khoản trong shard
- Duy trì tính nhất quán giữa các AccountChain

#### Cơ chế phân chia và hợp nhất

**Phân chia (Split):** Khi số lượng giao dịch vượt ngưỡng, shard cha chia thành hai shard con với tiền tố mới.

![Visual helper](/ton-course/split.png)

**Hợp nhất (Merge):** Khi lưu lượng giảm, các shard con có thể hợp nhất thành shard cha ban đầu.

![Visual helper](/ton-course/merge.png)

### 1. 3. Workchain (workchain >= 0)

#### Định nghĩa Workchain

Workchain là một chuỗi blockchain hoàn chỉnh trong hệ sinh thái TON, có thể có các quy tắc và cấu trúc dữ liệu riêng. Mỗi workchain có thể được tối ưu hóa cho các mục đích cụ thể.

#### Vị trí trong kiến trúc TON

- Workchain nằm dưới Masterchain trong cấu trúc phân cấp của TON.
- Mỗi Workchain có thể chứa nhiều ShardChain.

#### Đặc điểm chính của Workchain

**a) Tính độc lập:**

- Mỗi Workchain có thể có các quy tắc và cấu trúc dữ liệu riêng.
- Có thể được tối ưu hóa cho các ứng dụng cụ thể.

**b) Khả năng tùy chỉnh:**

- Có thể có các loại smart contract, cấu trúc giao dịch, và quy tắc đồng thuận riêng.

**c) Định danh:**

- Mỗi Workchain có một ID duy nhất. Hiện có một workchain chính là `Basechain` `workchain = 0` cũng chính là TON hiện tại.

### 🎯 Mục đích và ứng dụng

**a) Đa dạng hóa chức năng:**

- Cho phép TON hỗ trợ nhiều loại ứng dụng và use case khác nhau.

**b) Tối ưu hóa hiệu suất:**

- Mỗi Workchain có thể được tối ưu cho các tác vụ cụ thể.

**c) Cô lập rủi ro:**

- Vấn đề trong một Workchain không ảnh hưởng trực tiếp đến các Workchain khác.

#### Khả năng mở rộng

- TON có thể thêm Workchain mới khi cần thiết.
- Mỗi Workchain có thể phát triển độc lập, tăng khả năng mở rộng tổng thể của hệ thống.

#### Lợi ích của cấu trúc Workchain

**a) Linh hoạt:**

- Dễ dàng thích ứng với các yêu cầu mới của ứng dụng blockchain.

**b) Khả năng mở rộng:**

- Cho phép TON xử lý nhiều loại giao dịch và ứng dụng đồng thời. TON allows creating up to `2^32` workchains, each subdivided to up to `2^60` shards. Nowadays, there are only 2 workchains in TON: MasterChain and BaseChain.

**c) Cải thiện hiệu suất:**

- Tối ưu hóa cho các use case cụ thể có thể tăng đáng kể hiệu suất.

**d) Đổi mới:**

- Tạo điều kiện cho việc thử nghiệm và triển khai các ý tưởng blockchain mới.

### 1.4. Masterchain (workchain = -1)

####  Định nghĩa và Vị trí

Masterchain là "xương sống" của hệ thống TON, quản lý và điều phối toàn bộ mạng lưới. Nó nằm ở đỉnh của cấu trúc phân cấp, liên kết với tất cả các Workchain và ShardChain.
#### Chức năng chính

- Lưu trữ cấu hình mạng: Chứa thông tin về cấu trúc và cài đặt của toàn bộ hệ thống TON.
- Quản lý validator: Lưu trữ danh sách các validator hiện tại và stake của họ.
- Điều phối cross-chain: Xử lý và xác nhận giao dịch giữa các Workchain và ShardChain khác nhau.
- Lưu trữ trạng thái toàn cục: Duy trì bản ghi về trạng thái mới nhất của tất cả các Workchain và ShardChain.
- Đảm bảo tính nhất quán: Đảm bảo sự đồng bộ giữa các phần khác nhau của hệ thống.

#### Cấu trúc dữ liệu

Masterchain chứa các block đặc biệt gọi là "vertical blocks", tổng hợp thông tin từ các Workchain và ShardChain.
#### 🔒 Bảo mật và Đồng thuận

- Sử dụng thuật toán Proof-of-Stake (PoS) để xác thực giao dịch và tạo block mới.
- Các validator được chọn dựa trên số lượng TON Coin họ stake.
- Masterchain có mức độ bảo mật cao nhất, được xác thực bởi tất cả các validator.
