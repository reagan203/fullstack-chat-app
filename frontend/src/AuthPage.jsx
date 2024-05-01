import PropTypes from 'prop-types';
import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        )
        .then((response) => {
            props.onAuth({ ...response.data, secret: value });
        })
        .catch((error) => console.log('Error:', error));
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

// Define PropTypes
AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired, // onAuth must be a function and is required
};

export default AuthPage;
