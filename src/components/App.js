import React, { Component } from "react";
import Feedback from "./feedback/Feedback";
import Statistics from "./feedback/statistics/Statistics";
import Section from "./Section";
import Notification from "./feedback/notification/Notification";
import styles from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent: 0,
  };

  handleLeaveFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: (prevState[e.target.name] += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: (prevState.total =
        prevState.good + prevState.neutral + prevState.bad),
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercent: (prevState.good / prevState.total) * 100,
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercent } = this.state;
    return (
      <div className="App">
        <div className={styles.feedbackContainer}>
          <Section title="Please leave feedback">
            <Feedback onLeaveFeedback={this.handleLeaveFeedback} />
          </Section>

          <Section title="Statistics">
            {this.state.total === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercent={positivePercent}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
