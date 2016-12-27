/**
 * Created by nikita on 22.12.16.
 */
import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import User from '../components/User'
import * as menuActions from '../actions/MenuActions'
import * as userActions from '../actions/UserActions'
import * as tabActions from '../actions/TabActions'



 class App extends Component {
    render() {
        const{menu,user,tab}=this.props;
        const { setMenu } = this.props.menuActions;
        const { setUser } = this.props.userActions;
        const { setTab } = this.props.tabActions;
        return <div>
         <Menu index={menu.index} tabs={menu.menuTabs} tabtitle={tab.tabTitle} tabindex={tab.index} setTab={setTab} setMenu={setMenu}/>
        <User nameUser={user.nameUser} setUser={setUser}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        menu: state.menu,
        user:state.user,
        tab:state.tab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        menuActions: bindActionCreators(menuActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        tabActions:bindActionCreators(tabActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)