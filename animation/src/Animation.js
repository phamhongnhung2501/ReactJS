import React, { Component } from 'react';

class Animation extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Simple fade-in/fade-out example</h3>
                    <input id="myBtn" type="button" defaultValue="Fade Out" onclick="fade(this);" />
                    <img id="myImg" src="https://image.flaticon.com/icons/svg/609/609624.svg" />
                </div>
            </div>
        );
    }
}

export default Animation;