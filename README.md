# Amplify React UI - useAuthenticator Problems

## Reproduction Steps to see the problems

### Project Setup
clone the project and then run
```bash
npm i
amplify init
amplify add auth
```
for amplify add auth, set it up to `default federated` with `LoginWithAmazon` selected

set up your [LoginWithAmazon](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html) security profile on Amazon developer

### Testing
start the server
```bash
npm start
```
try to click the button and nothing happens

### Errors
log `authStatus` in the App component or try pulling in `route` and logging that as well

authStatus gets stuck on 'configuring'
route gets stuck on 'setup'

## Known Workaround
Currently the only way to make this work in a configuration like this is to add in a visible or invisible `<Authenticator />` component as shown on line 21 of `App.js`

Also check the styling added to `[data-amplify-authenticator]` in `App.css`

Read more about the issue [here](https://github.com/aws-amplify/amplify-ui/issues/1497)

