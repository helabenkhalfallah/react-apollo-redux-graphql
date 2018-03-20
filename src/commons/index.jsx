// only export modules
import AppLogger from './logger/AppLogger'
import NotFoundPage from './pages/notfound/NotFoundPage'
import AppApolloProvider from './apollo/AppApolloProvider'

// multiple pages export
const AppCommonModule = {
  AppLogger,
  NotFoundPage,
  AppApolloProvider,
}

export default AppCommonModule
