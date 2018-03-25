# react-apollo-redux-graphql

1. create a react app :
npx create-react-app react-apollo-redux-graphql

2. configure lint : 
npm install eslint --save-dev 
./node_modules/.bin/eslint --init

3. add airbnb lint style 
npm install babel-eslint --save-dev
npm install eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y --save-dev

4. configure lint : .eslintrc.js

5. configure dotenv : 
npm install dotenv --save 

and in index.js file and before any load :

```js
// configure env vars
dotenv.config()

// render
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
``` 
You should restart app each time you made change on .env file.
REACT_APP_ prefix is nessasary.

6. configure route file :
/routes/Routes.js

modify index.js like this :

```js
import Routes from './routes/Routes'
ReactDOM.render(<Routes />, document.getElementById('root'))
```

7. create application folders (by modules) :

**Module 1 Users :**
- pages : containers / statefull (connected to apollo/redux).
- components : stateless (presentation).
- redux (reducers, actions).
- graphql (graphql queries and mutations).

**Module 2 Photos :**
- pages : containers / statefull (connected to apollo/redux).
- components : stateless (presentation).
- redux (reducers, actions).
- graphql (graphql queries and mutations).

8. customize logger file
yarn add debug
AppLogger.js

9. add content inside UserListPage.jsx
10. install apollo : 
npm install apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag graphql ---save

11. create an AppApolloClient.js class
12. Results :
![Screenshot](./src/assets/images/appolo_connect_1.png) 

13. add redux 
npm install react-redux --save
npm install redux --save
npm install react-router-redux --save 
npm install history --save

14. UserAdd.jsx : addd a new user.
15. UserList.jsx display users list.
16. Connect UserList to redux : 

```jsx

// redux config
function mapStateToProps(state) {
  AppLogger.info('mapStateToProps', state)
  return {
    count: state ? state[0] : 2,
  }
}

// users list gql query
const userListgqlQuery = graphql(UserListQueries, {
  name: 'userListQueries',
  // auto refetch option
  // options: { pollInterval: process.env.REACT_APP_REFETCH_USERS_INTERVAL },
})

// export module wrapped by gql and redux
export default compose(
  userListgqlQuery,
  connect(mapStateToProps),
)(UserListPage)

```

17. Force update each time we increment the counter :

```js
// force refetch
  componentWillReceiveProps(nextProps) {
    if (this.props.count !== nextProps.count) {
      this.props.userListQueries.refetch()
    }
  }
```

18. Test result :
```js
// on user add action
  onUserAddClicked = (e) => {
    AppLogger.info('UserListPage onUserAddClicked : ', e)
    e.preventDefault()
    this.props.dispatch(addUserAction())
  }
```

```js
// render users
    return (
      <Fragment>
        <button onClick={this.onUserAddClicked} />
        <UserAdd count={this.props.count} />
        <UserList users={users} />
      </Fragment >
    )
```
onUserAddClicked => will trigger addUserAction redux action.
The reducer handle this request and update the state according to
the ActionType :

```js
// user reducer
const UsersReducer = (state = 0, action) => {
  let newState
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      newState = state + action.payload
      break
```

==> this will cause a new render and new refetch.
==> click => dispatch(addUserAction()) => reducer (proxy) get the appropriate action 
=> update state => transform state to props => auto render

**Redux act as a Manager, Apollo act as a data provider.**
*Apollo mutations are monitored and triggered by redux action.*
*Apollo queries can be scheduled for auto-refetch.*

19. install styled components :
npm install --save styled-components

