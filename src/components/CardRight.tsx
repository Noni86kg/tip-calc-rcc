import React, { Component } from "react";
import "./CardRight.css";

export default class CardRight extends Component<any> {
  render() {
    const { tip, total, finish } = this.props.date;
    return (
      <section className="card-right">
        <div>
          <div className="flex-just-space-between">
            <div className="flex-column">
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h5>${tip.toFixed(2)}</h5>
          </div>
          <div className="flex-just-space-between">
            <div className="flex-column">
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <h5>${total.toFixed(2)}</h5>
          </div>
        </div>
        <button
          className={
            finish ? "btn-darkGreen active-btn-darkGreen" : "btn-darkGreen"
          }
          onClick={this.props.restart}
        >
          RESET
        </button>
      </section>
    );
  }
}
