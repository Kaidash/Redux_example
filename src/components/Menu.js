/**
 * Created by nikita on 22.12.16.
 */
import React, { PropTypes, Component } from 'react'
import Tab from '../components/Tab'

export default class Menu extends Component {
    onMenuLinkClick(e) {
        e.preventDefault();
        // this.props.setMenu(e.target.textContent)
    }
    render() {
        const {index,tabs,setMenu}=this.props;
        return <div className='nav'>
            <ul className='primary'>
                { tabs.map( (value,i) =>
                <Tab key={i} isSelected={this.props.index == i} index={i} onClick={::this.onMenuLinkClick} setMenu={setMenu} value={value}/>
                )}
            </ul>
            <span className='Menu-name'> {index}!</span>

        </div>
    }
}

Menu.propTypes = {
    index: PropTypes.number.isRequired,
    tabs: PropTypes.array.isRequired,
    setMenu: PropTypes.func.isRequired
};
