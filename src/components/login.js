import React, { Component } from 'react';
import 'firebaseui/dist/firebaseui.css';
import Firebase from '../server/firebase';
import './login.css';


class Login extends Component {
    state = {
        autenticado : false,
        usuario : "",
        firebase : null
    }
    componentDidMount() {
        const firebase = new Firebase();
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({
                autenticado : true,
                usuario : firebase.auth.currentUser.email,
                firebase : firebase
            })
            :firebase.firebaseui.start("#firebaseui-auth-container", {
                signInSuccessUrl : "/",
                credentialHelper : "none",
                callbacks : {
                    signInSuccessWithAuthResult : (authResult, redirectUrl) => {
                        this.setState({
                            autenticado : true,
                            usuario : firebase.auth.currentUser.email,
                            firebase : firebase
                        })
                        return false;
                    }
                },
                signInOptions : [
                    {
                        provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
                    }
                ]
            })
        })
    }
    render() {
        return (
            this.state.autenticado
            ?(
                <React.Fragment>
                    <div id="login">
                        <div>
                            Usuario logeado {this.state.usuario}
                        </div>
                        <a href="#" onClick={() => {
                            this.state.firebase.auth.signOut().then(success => {
                                this.setState({
                                    autenticado : false
                                })
                            })
                        }}>
                            Salir
                        </a>
                    </div>
                </React.Fragment>
            )
            :<div id="firebaseui-auth-container"></div>
        );
    }
}

export default Login;