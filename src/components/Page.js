/**
 * Created by nikita on 22.12.16.
 */
import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    render() {
        const {name,tabs}=this.props;
        return <div>
            <p> {name}!</p>
            {tabs.map(function(item, index){
                return <a href='#' key={ index }>{item}</a>;
            })}
        </div>
    }
}

Page.propTypes = {
    name: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired
};
