import React, { Component } from 'react';

class Search extends Component {
    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return ( <div className="btn btn-block btn-outline-secondary" onClick={() =>this.props.ketNoi()} >Đóng lại</div>);
        }
        else{
            return  (<div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Thêm mới</div>);
        }
    }
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
                       {this.hienThiNut()}
                    </div>
                    </div>
                    
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;