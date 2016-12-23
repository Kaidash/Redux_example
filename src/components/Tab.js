/**
 * Created by nikita on 23.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class Tab extends Component {
    onMenuLinkClick(e) {
        e.preventDefault();
         this.props.setMenu(this.props.index)
    }
    render() {
        const {value}=this.props;
        return <li className={this.props.isSelected ? 'active':''}>
                    <a href='#'  onClick={::this.onMenuLinkClick}>{value} </a>
                </li>
    }
}

Tab.propTypes = {
    value: PropTypes.string.isRequired
};