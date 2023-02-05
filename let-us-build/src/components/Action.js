import React from "react";

export default class Action extends React.Component {
  render() {
    return (
      <div className="flex justify-between">
        <button
          onClick={this.props.handleRemoveAll}
          className=" shadow-md text-black bg-zinc-100 rounded-md pl-2 pr-2 pt-1 pb-1 hover:shadow-inner duration-300 "
        >
          Remove All
        </button>
        <button
          disabled={!this.props.hasOption}
          onClick={this.props.handlePick}
          className="border-2 border-slate-900 shadow-md text-zinc-300 bg-slate-800 rounded-md pl-2 pr-2 pt-1 pb-1 hover:bg-slate-600 duration-500 "
        >
          What should I do ?
        </button>
      </div>
    );
  }
}
