import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import Icon from "../../ui/icon";
import { textLevel1 } from "../../ui/common/shadows";
import { white, grey, grey2, grey3 } from "../../ui/common/colors";

import { APP_URL } from "../../setup/config/env";
import userRoutes from "../../setup/routes/user";


class StyleSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: {
        classy: 0,
        artsy: 0,
        punk: 0,
        sporty: 0,
        natureesque: 0
      },
    };
    console.log(this.props);
  }

  render() {
    return (
      <section>
        <Helmet>
          <title>My Style Preferences</title>
        </Helmet>
        <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H3 font="secondary">My Style Preferences</H3>

        <p style={{ marginTop: "1em", color: grey2 }}>
          Please complete the survey below.
        </p>
      </GridCell>
    </Grid>
      <GridCell style={{ textAlign: 'center', backgroundColor: grey  }}>
        <p style={{ marginBottom: '1em', color: grey2 }}>Like what you see?</p>
      </GridCell>

    <Grid>

    </Grid>
      </section>
    );
  }
}



StyleSurvey.propTypes = {};

export default StyleSurvey;
