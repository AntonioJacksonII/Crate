import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import StyleSurveyBox from "./StyleSurveyBox";
import { connect } from "react-redux";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import Icon from "../../ui/icon";
import { textLevel1 } from "../../ui/common/shadows";
import { white, grey, grey2, grey3 } from "../../ui/common/colors";

import { APP_URL } from "../../setup/config/env";
import userRoutes from "../../setup/routes/user";

const StyleSurvey = (props) => {
 
 const styleDescriptions = {
   classy : 'A Classy style Personality will always be elegantly and appropriately dressed for any occasion and always be well turned out.  Your style is simple, refined and somewhat restrained!',
   nature : 'Feeling comfortable in your clothes is most important to you and your easygoing nature tends towards more casual outfits. Simple lines and designs are your preferred choices over anything too detailed or fussy. In keeping with this carefree attitude you tend to buy only easy, wash and wear garments. You prefer fabrics such as denim, cotton jersey and lightweight knits. Your jewellery choices reflect your minimal look and you tend to wear basic and durable accessories with footwear also focussed on comfort. ',
   sporty : 'A Sporty style includes all forms of dressing with ease: from activewear to outdoorsy, sportswear to menswear. It’s about comfort; comfort from your clothes and with your body.',
   punk : 'this thing',
   artsy : 'You’re way of dressing is innovative and individualistic and you aren’t overly influenced by current trends or traditional rules. You use your clothing choices to reflect your personality, and put together unique and interesting outfits with items purchased from varied sources. Different colours, textures and prints fill your wardrobe and your jewellery collection is bold while your footwear and accessories are usually statement making. '
 }
  
  return (
    <section>
      <Helmet>
        <title>My Style Preferences</title>
      </Helmet>
      {!props.user.stylePreference ? (
        <div>
          <Grid style={{ backgroundColor: grey }}>
            <GridCell style={{ padding: "2em", textAlign: "center" }}>
              <H3 font="secondary">My Style Preferences</H3>

              <p style={{ marginTop: "1em", color: grey2 }}>
                Please complete the survey below.
              </p>
            </GridCell>
          </Grid>
          <GridCell style={{ textAlign: "center", backgroundColor: grey }}>
            {/* <p style={{ marginBottom: '1em', color: grey2 }}>Like what you see?</p> */}
            <StyleSurveyBox />
          </GridCell>
        </div>
      ) : (
        <div>
          <Grid style={{ backgroundColor: grey }}>
            <GridCell style={{ padding: "2em", textAlign: "center" }}>
              <H3 font="secondary">My Style Preferences</H3>
            </GridCell>
            <GridCell style={{ textAlign: "center", backgroundColor: grey }}>
              <section
                className="style-survey-box"
                style={{ backgroundColor: "#f9f9f9" }}
                >
                <h3 style={{ marginTop: "2em" }}>
                  Your style is:
                  <br></br>
                  ~ {props.user.stylePreference} ~
                </h3>
                <br></br>
                <h3 style={{ marginTop: "1em"}}>
                  {styleDescriptions[props.user.stylePreference]}
                </h3>
              </section>
            </GridCell>
          </Grid>
        </div>
      )}

      <Grid></Grid>
    </section>
  );
};

StyleSurvey.propTypes = {};

function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, null)(StyleSurvey);
// export default StyleSurvey;
