
import React, { PropTypes,Component } from 'react'

export default class User extends Component {
    onLinkClick(e) {
        this.props.setUser(e.target.textContent)
    }
    render() {
       const {nameUser}=this.props;
        return <div>
            <ul>
                <li><button onClick={::this.onLinkClick} >Sasha</button></li>
                <li><button onClick={::this.onLinkClick} >Patya</button></li>
                <li><button onClick={::this.onLinkClick} >Slava</button></li>
            </ul>
            <p>{nameUser} </p>
        </div>
    }
}
User.propTypes = {
    nameUser: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired
};

