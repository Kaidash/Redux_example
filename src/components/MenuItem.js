/**
 * Created by nikita on 23.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class MenuItem extends Component {
    onMenuLinkClick(e) {
        e.preventDefault();
         this.props.setMenu(this.props.index);
        this.props.setTab(0)
    }
    render() {
        const {value}=this.props;
        return <li className={this.props.isSelected ? 'active':''}>
                    <a href='#'  onClick={::this.onMenuLinkClick}>{value} </a>
                </li>
    }
}

MenuItem.propTypes = {
    value: PropTypes.string.isRequired
};