/**
 * Created by nikita on 22.12.16.
 */
import React, { Component} from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'

 class App extends Component {
    render() {
        const{menu}=this.props;
        return <div>
         <Page name={menu.name} tabs={menu.tabs}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(App)