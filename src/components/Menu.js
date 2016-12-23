/**
 * Created by nikita on 22.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class Menu extends Component {
    onMenuLinkClick(e) {
        this.props.setMenu(e.target.textContent)
    }
    render() {
        const {name,tabs}=this.props;
        return <div>
            <ul>
                <li><button onClick={::this.onMenuLinkClick} >menu1</button></li>
                <li><button onClick={::this.onMenuLinkClick} >menu2</button></li>
                <li><button onClick={::this.onMenuLinkClick} >menu3</button></li>
            </ul>
            <p> {name}!</p>
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
