import React, { PureComponent } from "react";
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

class StyleSurveyBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,

      classy: 0,
      artsy: 0,
      punk: 0,
      sporty: 0,
      nature: 0,

      imageSelected: false,
    };
  }

  nextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      imageSelected: false,
    });
  };

  updateCounter = (event) => {
    console.log(event.target.className);
    let styleName = this.state[event.target.className];
    let className = event.target.className;
    this.setState({
      imageSelected: true,
      [`${className}`]: styleName + 1 || 1,
    });
    // need to disable the other buttons
  };

  submitForm = () => {};
  render() {
    console.log(this.state);
    const questions = [
      {
        category: "living room",
        question: "Choose your ideal living room.",
        images: [
          {
            src: `${APP_URL}/images/stylesurvey/livingroom1.jpg`,
            value: "artsy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/livingroom2.jpg`,
            value: "punk",
          },
          {
            src: `${APP_URL}/images/stylesurvey/livingroom3.jpg`,
            value: "sporty",
          },
          {
            src: `${APP_URL}/images/stylesurvey/livingroom4.jpg`,
            value: "nature",
          },
          {
            src: `${APP_URL}/images/stylesurvey/livingroom5.jpg`,
            value: "classy",
          },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "cafe",
        question: "Choose your ideal cafe.",
        images: [
          {
            src: `${APP_URL}/images/stylesurvey/cafe1.jpg`,
            value: "punk",
          },
          {
            src: `${APP_URL}/images/stylesurvey/cafe2.jpg`,
            value: "sporty",
          },
          {
            src: `${APP_URL}/images/stylesurvey/cafe3.jpg`,
            value: "nature",
          },
          {
            src: `${APP_URL}/images/stylesurvey/cafe4.jpg`,
            value: "artsy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/cafe5.jpg`,
            value: "classy",
          },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "outdoor scene",
        question: "Choose your ideal outdoor scene.",
        images: [
          {
            src: `${APP_URL}/images/stylesurvey/outdoor1.jpg`,
            value: "sporty",
          },
          {
            src: `${APP_URL}/images/stylesurvey/outdoor2.jpg`,
            value: "nature",
          },
          {
            src: `${APP_URL}/images/stylesurvey/outdoor3.jpg`,
            value: "classy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/outdoor4.jpg`,
            value: "artsy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/outdoor5.jpg`,
            value: "punk",
          },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "bedroom",
        question: "Choose your ideal bedroom.",
        images: [
          {
            src: `${APP_URL}/images/stylesurvey/bedroom1.jpg`,
            value: "sporty",
          },
          {
            src: `${APP_URL}/images/stylesurvey/bedroom2.jpg`,
            value: "nature",
          },
          {
            src: `${APP_URL}/images/stylesurvey/bedroom3.jpg`,
            value: "artsy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/bedroom4.jpg`,
            value: "classy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/bedroom5.jpg`,
            value: "punk",
          },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "restaurant",
        question: "Choose your ideal restaurant.",
        images: [
          {
            src: `${APP_URL}/images/stylesurvey/restaurant1.jpg`,
            value: "classy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/restaurant2.jpg`,
            value: "nature",
          },
          {
            src: `${APP_URL}/images/stylesurvey/restaurant3.jpg`,
            value: "punk",
          },
          {
            src: `${APP_URL}/images/stylesurvey/restaurant4.jpg`,
            value: "artsy",
          },
          {
            src: `${APP_URL}/images/stylesurvey/restaurant5.jpg`,
            value: "sporty",
          },
        ],
        button: "Submit",
        function: this.submitForm,
      },
    ];

    return (
      <section
        className="style-survey-box"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <H3 font="secondary">{questions[this.state.currentStep].question}</H3>
        <section
          className="style-survey-images"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            style={{
              height: "288px",
              width: "231px",
              objectFit: "cover",
              margin: "1%",
            }}
            src={questions[this.state.currentStep].images[0].src}
            className={questions[this.state.currentStep].images[0].value}
            onClick={!this.state.imageSelected ? this.updateCounter : null}
          />

          <img
            style={{
              height: "288px",
              width: "231px",
              objectFit: "cover",
              margin: "1%",
            }}
            src={questions[this.state.currentStep].images[1].src}
            className={questions[this.state.currentStep].images[1].value}
            onClick={!this.state.imageSelected ? this.updateCounter : null}
          />

          <img
            style={{
              height: "288px",
              width: "231px",
              objectFit: "cover",
              margin: "1%",
            }}
            src={questions[this.state.currentStep].images[2].src}
            className={questions[this.state.currentStep].images[2].value}
            onClick={!this.state.imageSelected ? this.updateCounter : null}
          />

          <img
            style={{
              height: "288px",
              width: "231px",
              objectFit: "cover",
              margin: "1%",
            }}
            src={questions[this.state.currentStep].images[3].src}
            className={questions[this.state.currentStep].images[3].value}
            onClick={!this.state.imageSelected ? this.updateCounter : null}
          />

          <img
            style={{
              height: "288px",
              width: "231px",
              objectFit: "cover",
              margin: "1%",
            }}
            src={questions[this.state.currentStep].images[4].src}
            className={questions[this.state.currentStep].images[4].value}
            onClick={!this.state.imageSelected ? this.updateCounter : null}
          />
        </section>
        <Button
          theme="primary"
          style={{ marginTop: "1.5em" }}
          onClick={questions[this.state.currentStep].function}
        >
          {questions[this.state.currentStep].button}
        </Button>
      </section>
    );
  }
}

StyleSurveyBox.propTypes = {};

export default StyleSurveyBox;
