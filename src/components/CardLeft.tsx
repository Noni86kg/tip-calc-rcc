import React, { Component } from "react";
import "./CardLeft.css";
import { LeftCardPropsTypes } from "../models/models";

export default class CardLeft extends Component<LeftCardPropsTypes> {
  render() {
    const buttons: number[] = [5, 10, 15, 25, 50];
    const { calcTipResult, bill, numOfPeople, percentage, inputPercentage } =
      this.props.date;

    return (
      <section className="card-left">
        <div className="flex-just-space-between">
          <h3>Bill</h3>
          {calcTipResult.billHiddenMessage && (
            <p className="hidden-message">Can't be zero</p>
          )}
        </div>
        <div className="form">
          <input
            type="number"
            placeholder="0"
            onChange={this.props.handleChange}
            name="bill"
            value={bill ? bill : ""}
          />
          <div className="dollar icons" />
        </div>
        <h3>Select Tip %</h3>
        <div className="buttons">
          {buttons.map((button, key: number) => {
            return (
              <button
                key={key}
                value={button}
                className={
                  percentage === button
                    ? "btn-green active-btn-green"
                    : "btn-green"
                }
                onClick={this.props.tipCalc}
              >
                {button}%
              </button>
            );
          })}
          <input
            className="input-tip"
            type="number"
            onChange={this.props.handleChange}
            placeholder="Custom"
            name="inputPercent"
            value={inputPercentage ? inputPercentage : ""}
          />
        </div>
        <div className="flex-just-space-between">
          <h3>Number of People</h3>
          {calcTipResult.peopleHiddenMessage && (
            <p className="hidden-message">Can't be zero</p>
          )}
        </div>
        <div className="form">
          <input
            type="number"
            placeholder="0"
            onChange={this.props.handleChange}
            name="numOfPeople"
            value={numOfPeople ? numOfPeople : ""}
          />
          <div className="people icons" />
        </div>
      </section>
    );
  }
}
