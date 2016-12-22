/**
 * Created by nikita on 22.12.16.
 */
import React, { Component} from 'react'
import { connect } from 'react-redux'

 class App extends Component {
    render() {
        // (1)
        const {name,tabs}=this.props.menu;
        return <div>
            <p> {name}!</p>
            {tabs.map(function(item, index){
                return <a href='#' key={ index }>{item}</a>;
            })}
        </div>
    }
}

function mapStateToProps (state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(App)