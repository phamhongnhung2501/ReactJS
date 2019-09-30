import React, { Component } from 'react';

class AddUser extends Component {
   
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === false){
            return (
                <div className="card border-primary mt-3 mt-2">
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
        console.log("connect!");
        
        return (
                <div className="col-3">
                    {this.kiemTraTrangThai()}
                           
                </div>
        );
    }
}

export default AddUser;