// App Imports
import List from '../../modules/crate/List'

// Crate routes - The style-preferences route will look similar
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true // This only allows a user to access this route
  }
}
