import React, { Component } from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai:0
        }
        
    }
    thongbao = () => {alert('Cach xu ly tuong tac trong react js');}  
    thongbao2 = () => {
        alert('Thong bao so 2');
    }

    renderButton = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                    <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                </div>
            </div>
        )

    }
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
    displayCheck = () => {
        if(this.state.trangThai===0){
            return this.renderButton();
        }
        else{
            return this.renderForm();
        }
    }
    editClick = () => {
        this.setState({trangThai:1});
    }
    saveClick = () => {
        this.setState({trangThai:0});
        console.log(this.trunggian.value);
    }


    componentWillMount() {
        
    }

    render() {
        return (
            <div className="col-lg-4">  
                <div className="row">
                    <div className="col-lg-5">
                    <div className="p-1">
                        <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                    </div>
                    </div>
                    <div className="col-lg-7 ">
                    <div className="p-1">
                        <h2 className="display-6">{this.props.tieude}</h2>
                        <p>{this.props.trichdan}</p>
                    </div>
                    <hr/>
                    
                    {this.displayCheck()}
                    
                    </div>
                </div>
              </div>  
           
        );
    }
}

export default Content;