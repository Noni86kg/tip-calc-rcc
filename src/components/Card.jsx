import React, { Component } from "react";
import "./Card.css";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcTipResult: {
        tip: 0,
        total: 0,
        finish: false,
        billHiddenMessage: false,
        peopleHiddenMessage: false,
      },
      bill: null,
      numOfPeople: null,
      percentage: null,
      inputPercentage: null,
    };
  }

  hiddenBothMess = () => {
    this.setState({
      calcTipResult: {
        ...this.state.calcTipResult,
        billHiddenMessage: true,
        peopleHiddenMessage: true,
      },
    });
  };

  hiddenBillMess = () => {
    this.setState({
      calcTipResult: {
        ...this.state.calcTipResult,
        billHiddenMessage: true,
        peopleHiddenMessage: false,
      },
    });
  };

  hiddenNumOfPeopleMess = () => {
    this.setState({
      calcTipResult: {
        ...this.state.calcTipResult,
        billHiddenMessage: false,
        peopleHiddenMessage: true,
      },
    });
  };

  handleChange = (event) => {
    if (event.target.name === "bill") {
      this.setState({ bill: Number(event.target.value) });
      if (event.target.value) {
        if (this.state.percentage && this.state.numOfPeople) {
          const tip =
            ((Number(event.target.value) / Number(100)) *
              Number(this.state.percentage)) /
            Number(this.state.numOfPeople);
          const total =
            Number(event.target.value) / Number(this.state.numOfPeople) + tip;
          this.setState({
            calcTipResult: {
              tip: tip,
              total: total,
              finish: true,
              billHiddenMessage: false,
              peopleHiddenMessage: false,
            },
          });
        } else {
          this.setState({
            calcTipResult: {
              tip: this.state.calcTipResult.tip,
              total: this.state.calcTipResult.total,
              finish: this.state.calcTipResult.finish,
              billHiddenMessage: false,
              peopleHiddenMessage: this.state.calcTipResult.peopleHiddenMessage,
            },
          });
        }
      } else {
        this.setState({
          calcTipResult: {
            tip: 0,
            total: 0,
            finish: false,
            billHiddenMessage: true,
            peopleHiddenMessage: this.state.calcTipResult.peopleHiddenMessage,
          },
        });
      }
    } else if (event.target.name === "numOfPeople") {
      this.setState({ numOfPeople: Number(event.target.value) });
      if (event.target.value) {
        if (this.state.percentage && this.state.bill) {
          const tip =
            ((Number(this.state.bill) / Number(100)) *
              Number(this.state.percentage)) /
            Number(event.target.value);
          const total =
            Number(this.state.bill) / Number(event.target.value) + tip;
          this.setState({
            calcTipResult: {
              tip: tip,
              total: total,
              finish: true,
              billHiddenMessage: false,
              peopleHiddenMessage: false,
            },
          });
        } else {
          this.setState({
            calcTipResult: {
              tip: this.state.calcTipResult.tip,
              total: this.state.calcTipResult.total,
              finish: this.state.calcTipResult.finish,
              billHiddenMessage: this.state.calcTipResult.billHiddenMessage,
              peopleHiddenMessage: false,
            },
          });
        }
      } else {
        this.setState({
          calcTipResult: {
            tip: 0,
            total: 0,
            finish: false,
            billHiddenMessage: this.state.calcTipResult.billHiddenMessage,
            peopleHiddenMessage: true,
          },
        });
      }
    } else if (event.target.name === "inputPercent") {
      const percent = Number(event.target.value);
      this.setState({ percentage: percent });
      this.setState({ inputPercentage: percent });
      if (this.state.bill && this.state.numOfPeople) {
        const tip =
          ((Number(this.state.bill) / Number(100)) * Number(percent)) /
          Number(this.state.numOfPeople);
        const total =
          Number(this.state.bill) / Number(this.state.numOfPeople) + tip;
        this.setState({
          calcTipResult: {
            tip: tip,
            total: total,
            finish: true,
            billHiddenMessage: false,
            peopleHiddenMessage: false,
          },
        });
      } else if (!this.state.numOfPeople && !this.state.bill) {
        this.hiddenBothMess();
      } else if (!this.state.bill) {
        this.hiddenBillMess();
      } else if (!this.state.numOfPeople) {
        this.hiddenNumOfPeopleMess();
      }
    }
  };

  tipCalc = (e) => {
    const percent = Number(e.target.getAttribute("value"));

    this.setState({ percentage: percent });
    if (this.state.bill && this.state.numOfPeople) {
      const tip =
        ((Number(this.state.bill) / Number(100)) * Number(percent)) /
        Number(this.state.numOfPeople);
      const total =
        Number(this.state.bill) / Number(this.state.numOfPeople) + tip;
      this.setState({
        calcTipResult: {
          tip: tip,
          total: total,
          finish: true,
          billHiddenMessage: false,
          peopleHiddenMessage: false,
        },
      });
    } else if (!this.state.numOfPeople && !this.state.bill) {
      this.hiddenBothMess();
    } else if (!this.state.bill) {
      this.hiddenBillMess();
    } else if (!this.state.numOfPeople) {
      this.hiddenNumOfPeopleMess();
    }
  };

  restart = () => {
    if (this.state.calcTipResult.finish) {
      this.setState({
        calcTipResult: {
          tip: 0,
          total: 0,
          finish: false,
          billHiddenMessage: false,
          peopleHiddenMessage: false,
        },
        bill: null,
        numOfPeople: null,
        percentage: null,
        inputPercentage: null,
      });
    }
  };

  render() {
    return (
      <main className="card">
        <CardLeft
          date={this.state}
          handleChange={this.handleChange}
          tipCalc={this.tipCalc}
        />
        <CardRight date={this.state.calcTipResult} restart={this.restart} />
      </main>
    );
  }
}
