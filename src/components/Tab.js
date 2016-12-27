/**
 * Created by nikita on 27.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class Tab extends Component {
    onTabClick(e) {
        e.preventDefault();
        this.props.setTab(this.props.indexTab)
    }
    render() {
        const {value}=this.props;
        return <li className={this.props.isSelected ? 'active tabItem':'tabItem'}>
            <a href='#' onClick={::this.onTabClick}>{value}</a>
        </li>
    }
}

Tab.propTypes = {
    value: PropTypes.string.isRequired
};