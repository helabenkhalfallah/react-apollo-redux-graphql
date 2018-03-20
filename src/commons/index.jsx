// only export modules
import AppLogger from './logger/AppLogger'
import NotFoundPage from './pages/notfound/NotFoundPage'

// multiple pages export
const AppCommonModule = {
  AppLogger,
  NotFoundPage,
}

export default AppCommonModule
