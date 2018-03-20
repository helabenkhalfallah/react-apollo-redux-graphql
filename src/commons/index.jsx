// only export modules
import AppLogger from './logger/AppLogger'
import NotFoundPage from './pages/notfound/NotFoundPage'
import AppApolloProvider from './apollo/AppApolloProvider'
import EmptyPage from './pages/empty/EmptyPage'
import ErrorPage from './pages/error/ErrorPage'
import LoadingPage from './pages/loading/LoadingPage'

// multiple pages export
const AppCommonModule = {
  AppLogger,
  NotFoundPage,
  AppApolloProvider,
  EmptyPage,
  ErrorPage,
  LoadingPage,
}

export default AppCommonModule
