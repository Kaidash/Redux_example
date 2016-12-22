/**
 * Created by nikita on 22.12.16.
 */
import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import * as menuActions from '../actions/MenuActions'

 class App extends Component {
    render() {
        const{menu}=this.props;
        const { setMenu } = this.props.menuActions;

        return <div>
         <Menu name={menu.name} tabs={menu.tabs} setMenu={setMenu}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        menuActions: bindActionCreators(menuActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)