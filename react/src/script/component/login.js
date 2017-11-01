import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            usernameFlag: false,
            passwordFlag: false
        };
        this.checkUsername= this.checkUsername.bind(this);
        this.checkPassword= this.checkPassword.bind(this);
    }

    checkUsername (event) {
        const reg = new RegExp('(^[a-zA-Z])([a-zA-Z0-9]{5,11})', 'g');
        event.preventDefault();
        if (reg.test(event.target.value)) {
            this.setState({
                usernameFlag: true
            });
        } else {
            this.setState({
                usernameFlag: false
            });
        }
    }

    checkPassword (event) {
        const reg = new RegExp('//w{6,64}', 'g');
        event.preventDefault();
        if (reg.test(event.target.value)) {
            this.setState({
                passwordFlag: true
            });
        } else {
            this.setState({
                passwordFlag: false
            });
        }
    }

    render () {
        return (
            <form method='POST'>
                <p>
                    <label htmlFor="username">username: </label>
                    <input type="text" name="username" placeholder="username" onBlur={this.checkUsername} />
                    <span>{!this.state.usernameFlag || 'invalid username'}</span>
                </p>
                <p>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" placeholder="password" onBlur={this.checkPassword} />
                    <span>{!this.state.passwordFlag || 'invalid password'}</span>
                </p>
                <p>
                    <button>submit</button>
                </p>
            </form>
        );
    }
}

export default Login;
