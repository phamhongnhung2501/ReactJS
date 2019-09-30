import React, { Component } from 'react';
import {connect} from 'react-redux';
class News extends Component {
    // tham số dispatch được truyền trực tiếp vào component News dưới dạng props 
    // useEditStatusInStore = () => {
    //     var {dispatch} = this.props;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        return (
            <div>
                <h2>This is News component</h2>
                {/* khi click vào nó sẽ goi ra hàm useEditStatusInStore, tức là sử dụng hàm thay đổi trạng thái trong store */}
                <button onClick={() => this.props.useEditStatusInStore()}>Click</button>  
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);