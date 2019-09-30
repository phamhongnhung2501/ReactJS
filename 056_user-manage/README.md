**Bài 59 Xử lý các tương tác cơ bản trên frontend bằng React JS**

- b1: Viết tương tác để thao tác nhanh hơn trên frontend
```
 Sử dụng 1 biến nếu biến đó là true thì sẽ thêm button "thêm mới"
còn nếu là false thì sẽ hiển thị ra button "đóng lại"
```
- b2: modify file AddUser.js
```
constructor(props) {
        super(props);
        this.state ={
            trangThaiChinhSua : false
        }
    }
    
hienThiNut = () => {
    if(this.state.trangThaiChinhSua === true){
        return <div className="btn btn-block btn-outline-secondary">Đóng lại</div>;
    }
    else{
        return  <div className="btn btn-block btn-outline-info">Thêm mới</div>;
    }
}
    render() {
        return (
                <div className="col-3">
                    <div >
                       {this.hienThiNut()}
                        
                       
```

-> Thêm state và cho tạo 1 hàm hiển thị nút, nếu trạng thái đúng thì hiển thị true, sai -> false

--------------------------------------------------------------------
**Bai60: Xử lý hiển thị form thông báo**

- Tạo 1 ArrowFuntion là thayDoiTrangThai

```
thayDoiTrangThai = () => {
    this.setState({
        trangThaiChinhSua: !this.state.trangThaiChinhSua
    });
}
```
- Trong hàm "hienThiNut" gọi hàm onClick bằng ArrowFuntion để khi click nó mới chuyển trạng thái 
```
hienThiNut = () => {
    if(this.state.trangThaiChinhSua === true){
        // ArrowFuntion ben duoio phai click vao moi chay
        return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()} >Đóng lại</div>; 
    }
    else{
        return  <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()} >Thêm mới</div>;
    }
}
```
- Tạo hàm "hienThiForm" khi click vào "thêm mới" thì sẽ hiển thị ra form add, còn nếu click vào "đóng lại" thị nó sẽ không hiển thị rồi khi render gọi hàm này ra
```
hienThiForm = () => {
    if(this.state.trangThaiChinhSua === true){
        return ( <div className="card border-primary mt-3 mt-2">
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <select className="custom-select" required>
                        <option selected>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">Thêm mới</div>
                    </div>
                    </div>
                </div>
        )    
    }
}
    render() {
        return (
                <div className="col-3">
                    <div >
                        
                       {this.hienThiNut()} 
                       {this.hienThiForm()}

                    </div>
                </div>
        );
    }
}
```
-----------------------------------------------------------------

**Bai_60:Cách kết nối từ component con sang component cha trong ReactJS**

- Cách tác dụng 1 phần tử nằm trong component AddUser đến component Search
- b1: Làm thế nào Search tương tác với App
```
---> tương tác thông qua props
```
- Sửa file Search.js
```
import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                    <div className="btn-group" style={{width: '500px'}}>
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info">Tìm</div>
                        
                    </div>
                    <div className="btn-group1">
                        <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()} >Đóng lại</div>
                        <div className="btn btn-block btn-outline-info" >Thêm mới</div>
                    </div>
                    </div>
                    
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;
```
- Sửa file App.js
```
import React from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';



function App() {
  function thongBao () {alert("Ket noi thanh cong!");}

  return (
    <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search ketNoi={()=>thongBao()}/>
            <TableData/>
            <AddUser/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```



