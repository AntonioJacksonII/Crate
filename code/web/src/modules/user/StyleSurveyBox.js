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
      counter: {
        classy: 0,
        artsy: 0,
        punk: 0,
        sporty: 0,
        natureesque: 0,
      },
    };
  }

  nextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  };

  submitForm = () => {};
  render() {
    const questions = [
      {
        category: "living room",
        question: "Choose your ideal living room.",
        images: [
          {
            src: "https://unsplash.com/photos/kog39lmHguY",
            value: "something else",
          },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "cafe",
        question: "Choose your ideal cafe.",
        images: [
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "outdoor scene",
        question: "Choose your ideal outdoor scene.",
        images: [
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "bedroom",
        question: "Choose your ideal bedroom.",
        images: [
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
        ],
        button: "Next",
        function: this.nextStep,
      },
      {
        category: "restaurant",
        question: "Choose your ideal restaurant.",
        images: [
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
          { src: `something`, value: "something else" },
        ],
        button: "Submit",
        function: this.submitForm,
      },
    ];

    return (
      <section className="style-survey-box">
        <H3 font="secondary">{questions[this.state.currentStep].question}</H3>
        <section className="style-survey-images">
          <img
            src={questions[this.state.currentStep].images[0].src}
            value={questions[this.state.currentStep].images[0].value}
          />

          <img
            src={questions[this.state.currentStep].images[1].src}
            value={questions[this.state.currentStep].images[1].value}
          />

          <img
            src={questions[this.state.currentStep].images[2].src}
            value={questions[this.state.currentStep].images[2].value}
          />

          <img
            src={questions[this.state.currentStep].images[3].src}
            value={questions[this.state.currentStep].images[3].value}
          />

          <img
            src={questions[this.state.currentStep].images[4].src}
            value={questions[this.state.currentStep].images[4].value}
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
