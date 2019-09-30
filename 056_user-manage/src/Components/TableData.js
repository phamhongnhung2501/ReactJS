import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
                <div className="col-9">
                    <table className="table table-hover table-striped ">
                    <thead className="thead-inverse">
                        <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td >1</td>
                        <td>Phạm Hồng Nhung</td>
                        <td>0162001897</td>
                        <td>Moderator</td>
                        <td>
                            <div className="btn-group">
                            <div className="btn btn-warning sua"> <i className="fa fa-edit">Sửa</i></div>
                            <div className="btn btn-danger xoa"> <i className="fa fa-delete">Xóa</i></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td >2</td>
                        <td>Từ Thị Thảo</td>
                        <td>032010897</td>
                        <td>Moderator</td>
                        <td>
                            <div className="btn-group">
                            <div className="btn btn-warning sua"> <i className="fa fa-edit">Sửa</i></div>
                            <div className="btn btn-danger xoa"> <i className="fa fa-delete">Xóa</i></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td >3</td>
                        <td>Vũ Thị Ngọc Quỳnh</td>
                        <td>013792064</td>
                        <td>Moderator</td>
                        <td>
                            <div className="btn-group">
                            <div className="btn btn-warning sua"> <i className="fa fa-edit">Sửa</i></div>
                            <div className="btn btn-danger xoa"> <i className="fa fa-delete">Xóa</i></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td >4</td>
                        <td>Hoàng Thị Huyền</td>
                        <td>0352001897</td>
                        <td>Moderator</td>
                        <td>
                            <div className="btn-group">
                            <div className="btn btn-warning sua"> <i className="fa fa-edit">Sửa</i></div>
                            <div className="btn btn-danger xoa"> <i className="fa fa-delete">Xóa</i></div>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td >5</td>
                        <td>Phạm Hồng Nhung</td>
                        <td>0162001897</td>
                        <td>Moderator</td>
                        <td>
                            <div className="btn-group">
                            <div className="btn btn-warning sua"> <i className="fa fa-edit">Sửa</i></div>
                            <div className="btn btn-danger xoa"> <i className="fa fa-delete">Xóa</i></div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
        );
    }
}

export default TableData;