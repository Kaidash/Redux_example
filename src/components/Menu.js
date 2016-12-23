/**
 * Created by nikita on 22.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class Menu extends Component {
    onMenuLinkClick(e) {
        e.preventDefault();
        this.props.setMenu(e.target.textContent)
    }
    render() {
        const {name,tabs}=this.props;
        return <div className='nav'>
            <ul className='primary'>
                <li><a href='#' className='link' onClick={::this.onMenuLinkClick} >menu1</a></li>
                <li><a href='#' className='link' onClick={::this.onMenuLinkClick} >menu2</a></li>
                <li><a href='#' className='link' onClick={::this.onMenuLinkClick} >menu3</a></li>
            </ul>
            <span className='Menu-name'> {name}!</span>
            {tabs.map(function(item, index){
                return <a href='#' key={ index }>{item}</a>;
            })}
        </div>
    }
}

Menu.propTypes = {
    name: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    setMenu: PropTypes.func.isRequired
};
