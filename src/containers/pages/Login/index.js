import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) =>{
        console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async () =>{
        const {email, password} = this.state;
        const {history} = this.props;
        console.log(email, password);
        const res = await this.props.loginAPI({ email, password }).catch(err => err);
        if(res){
            console.log("Login Succcess");
            this.setState({
                email: '',
                password: ''
            })
            history.push('/');
        }
        else{
            console.log("login Failed");
        }
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder='Email' type='text' onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" placeholder='Password' type='password' onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                    <Link to="/register">
                        <Button title="Go to Register" />
                    </Link>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading : state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI : (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);