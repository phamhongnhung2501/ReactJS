**Component hóa giao diện HTML sang ReactJS**

- HTML->JSX
- JSX ->Component

**Để viết được các hiệu ứng tương tác website thì:**

- Phải đưa các phần tử thành HTML
- Khi đó mới có mới có thể lập trình tương tác của website
- ReactJS không viết cho HTML mà chỉ viết cho component

**HOW:**

- Tạo 1 giao diện frontend bằng HTML
```
1. Có luôn giao diện
2. search từ khóa "start bootstrap one page" lấy html của giao diện đó
```
- Chuyển sang reactjs component
```
1. Tạo project
2. Làm từng phần
3. Done!
```
**Lập trình tương tác trong ReactJS**

**NOTE:**
- Thay vì dấu " thì thay bằng dấu {}
- Với hàm không có tham số thì không cần có () sau tên hàm

```
vd:
thongbao = () => {alert('Cach xu ly tuong tac trong react js');}  
```
=>
```
<div className="btn btn-info" onClick={this.thongbao}>Edit</div>
```

