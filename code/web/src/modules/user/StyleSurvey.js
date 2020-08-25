import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'

class StyleSurvey extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style : null
    }
  }


render() {
  return (
    <h1>Look at this style!</h1>

  )

}

}

StyleSurvey.propTypes = {
}

export default StyleSurvey;