import { useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import Router from 'next/router';
import LoginGoogle from './LoginGoogle'

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, username, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, username, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signupForm = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className ="col-md-8">
                        <div className="container pt-20">
                            <div className="row text-center">
                                <div className="col-md-12 text-center">
                                    <h2 className="display-4 font-weight-bold">
                                        Why find other 
                                        <br/>
                                        <h1 className="display-3 font-weight-bold">
                                            "MEDIUM"
                                        </h1>
                                        when you can get  
                                        <h1 className="display-3 font-weight-bold">
                                        paid better!!
                                        </h1>
                                    </h2>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className ="col-md-4">
                        <h2 className="text-center pt-4 pb-4">Signup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    value={username}
                                    onChange={handleChange('username')}
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your username"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={name}
                                    onChange={handleChange('name')}
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your name"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={email}
                                    onChange={handleChange('email')}
                                    type="email"
                                    className="form-control"
                                    placeholder="Type your email"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={password}
                                    onChange={handleChange('password')}
                                    type="password"
                                    className="form-control"
                                    placeholder="Type your password"
                                />
                            </div>

                            <div>
                                <div style={{textAlign: "center"}}>
                                <button className="btn btn-warning">Signup</button>
                                </div>
                                <hr/>
                                <LoginGoogle/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
    );
};

export default SignupComponent;