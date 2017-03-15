import React, { Component } from 'react';
import { connect } from "react-redux";

class Data extends Component {

    render() {
        var { data } = this.props
        return (
            <div>
                {/*{console.log(this.props.data," data Component")}
                {console.log(data , "seci")}*/}
                {data.map(function (val, i) {
                    return (
                        <p key={i}>{val.item}</p>
                    )
                })}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        data: state.list
    }
})(Data);