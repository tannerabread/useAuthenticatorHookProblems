import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function LoggedIn() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <>
            <h2>Welcome, {user.username}!</h2>
            <button onClick={signOut}>Sign Out</button>
        </>
    );
}

function NotLoggedIn() {
    const { toFederatedSignIn } = useAuthenticator();

    return (
        <>
        {/* <Authenticator /> */}
            <button onClick={() => toFederatedSignIn('Amazon')}>Login With Amazon</button>
        </>
    );
}

function App() {
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    return (
        <>
            {authStatus === 'configuring' && 'Loading...'}
            {authStatus !== 'authenticated' ? <NotLoggedIn /> : <LoggedIn />}
        </>
    )
}

export default () => (
    <Authenticator.Provider>
        <App />
    </Authenticator.Provider>
);
