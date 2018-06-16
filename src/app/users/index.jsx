// only export modules
// only pages are visibles
import UserListPage from './pages/UserListPage'
import UsersReducer from './redux/reducers/UsersReducer'

// multiple pages export
const UserModule = {
  UserListPage,
  UsersReducer,
}

export default UserModule
