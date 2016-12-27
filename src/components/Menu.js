/**
 * Created by nikita on 22.12.16.
 */
import React, { PropTypes, Component } from 'react'
import MenuItem from '../components/MenuItem'
import Tab from '../components/Tab'

export default class Menu extends Component {
    render() {
        const {index,tabs,setMenu,tabindex,tabtitle,setTab}=this.props;
        let contKey=tabs.length;
        return <div className='nav'>
            <ul className='primary'>
                { tabs.map( (value,i) =>
                <MenuItem key={i} isSelected={this.props.index == i} index={i}  setMenu={setMenu} setTab={setTab} value={value}/>
                )}
            </ul>
            <article className='tabs'>
                <ul>
                    { tabtitle.map( (value,i) =>
                        <Tab key={i+contKey} indexTab={i}  isSelected={tabindex == i} setTab={setTab} value={value}/>
                    )}
                </ul>
                <section className='tabInner'>
                    asd
                </section>
            </article>
            <span className='Menu-name'> {index} </span>
        </div>
    }
}

Menu.propTypes = {
    index: PropTypes.number.isRequired,
    tabs: PropTypes.array.isRequired,
    tabindex: PropTypes.number.isRequired,
    tabtitle:PropTypes.array.isRequired
};
