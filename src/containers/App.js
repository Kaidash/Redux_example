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


 class App extends Component {
    render() {
        const{menu}=this.props;
        const{user}=this.props;
        const { setMenu } = this.props.menuActions;
        const { setUser } = this.props.userActions;

        return <div>
         <Menu index={menu.index} tabs={menu.menuTabs} setMenu={setMenu}/>
        <User nameUser={user.nameUser} setUser={setUser}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        menu: state.menu,
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        menuActions: bindActionCreators(menuActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)