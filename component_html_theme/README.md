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
**State**
-
- State là biến trung gian hoạt động trong suốt quá trình thao tác với component
- State đóng vai trò trung gian giữ các biến, tham số trong lúc lập trình với react-js
- State=scope trong AngularJS
- State lưu được không gian giới hạn tham số, ví nó là kiểu object

**Sử dụng thuộc tính defaultValue trong JSX**

**LifeCycle trong React JS**

- Lifecycle là tập hợp các hàm mà reactjs đã dựng sẵn
- Học Lifecycle là học thuộc các hàm và ý nghĩa của hàm
- Danh sách các hàm chia làm 4 phần tương ứng với quá trình hoạt động
```
1. init
   - Quá trình khởi tạo 1 component
   - Đặt biến, lấy props, khai báo state
2. Mounting
   - Những hàm kết nối và khởi tạo component ra trình duyệt
   - Trước khi hiển thị
   - Sau khi hiển thị
3. Update
   - Thay đổi tăn, giảm thao tác với giá trị
4. Unmounting
   - Hủy bỏ gắn kết
 ```
 **REF**
- ref được sử dụng để lấy tham chiếu đến 1 node hay nói cách khác nó sẽ return về 1 node mà chúng ta tham chiếu tới

- vd:
```
renderForm = () =>  (
            <div className="row">
                <div className="from-group">
                    <input ref={(dulieunhap) => {this.trunggian=dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control"/>
                </div>
                <div className="from-group">
                    <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
                </div>
            </div>
        )
```
```
saveClick = () => {
        this.setState({trangThai:0});
        console.log(this.trunggian.value);
    }
```

