import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            usernameFlag: false
        };
        this.checkUsername= this.checkUsername.bind(this);
    }

    checkUsername () {
        this.setState({
            usernameFlag: !this.state.usernameFlag

        });
        console.log(this.state.usernameFlag)
    }

    render () {
        return (
            <form method='POST'>
                <p>
                    <label htmlFor="username">username: </label>
                    <input type="text" name="username" placeholder="username" onBlur={this.checkUsername} />
                    <span>{this.state.usernameFlag || 'username cannot be blank'}</span>
                </p>
                <p>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" placeholder="password"/>
                </p>
                <p>
                    <button>submit</button>
                </p>
            </form>
        );
    }
}

export default Login;
