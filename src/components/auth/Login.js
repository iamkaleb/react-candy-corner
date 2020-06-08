import React, {useState} from "react"

const Login = props => {
    const [credentials, setCredentials] = useState({username: "", password: ""});

    const handleFieldChange = event => {
        const stateToChange = {...credentials}
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = event => {
        event.preventDefault();
        

        props.setUser(credentials);
        props.history.push("/products");
    }

    return (
        <form onSubmit={handleLogin}>
            <fieldset>
                <h3>Houchens' Candy Counter</h3>
                <div>
                    <input 
                        onChange={handleFieldChange}
                        type="text" 
                        id="username"
                        required=""
                        autoFocus=""
                    />
                    <label htmlFor="inputUsername">Username</label>

                    <input
                        onChange={handleFieldChange}
                        type="password"
                        id="password"
                        required=""
                    />
                    <label htmlFor="inputPassword">Password</label>

                </div>
                <button type="submit">Login</button>
            </fieldset>
        </form>
    )
} 

export default Login