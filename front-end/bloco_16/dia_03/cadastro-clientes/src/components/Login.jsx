import React from 'react'
import { connect } from 'react-redux';
import { login } from '../redux/action';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      inputLogin: '',
      inputPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { login } = this.props;
    const { inputLogin, inputPassword } = this.state;
    login(inputLogin, inputPassword);

  }
  render() {
    return(
      <div>
        <label>Login</label>
        <input name="inputLogin" type="text" onChange={this.handleChange}/>
        <label>Senha</label>
        <input name="inputPassword" type="text" onChange={this.handleChange}/>
        <button 
          type="button"
          onClick={ () => this.handleClick()}
        >
          Login
        </button>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (log, pass) => dispatch(login(log, pass))});

export default connect(null, mapDispatchToProps)(Login);
