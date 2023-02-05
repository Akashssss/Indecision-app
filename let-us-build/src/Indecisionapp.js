import React, { Component } from "react";
import AddOption from "./components/AddOption";
import Options from "./components/Options";
import Action from "./components/Action";
import Head from "./components/Head";
import Header from "./Header";
// import { Outlet } from "react-router-dom";
export default class Indecisionapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTitle: "Put Your Life In the Hands Of Computer",
      options: props.options,
    };
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    let option = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[option]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter the valid value to add in option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exist ";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleRemoveOne(optionRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionRemove;
      }),
    }));
  }

  render() {
    return (
      <div className=" flex justify-center items-center md:mt-1">
        {/* <Header/> */}
        <div className=" flex flex-col justify-center items-center  shadow-2xl m-7 p-7 rounded-lg ">
          <Head
            /*title={this.state.title.toUpperCase()}*/ subTitle={
              this.state.subTitle
            }
          />

          <Action
            hasOption={this.state.options.length > 0 ? true : false}
            handlePick={this.handlePick}
            handleRemoveAll={this.handleRemoveAll}
          />
          <Options
            options={this.state.options}
            handleRemoveOne={this.handleRemoveOne}
          />

          <div className=" mt-7">
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    );
  }
}
Indecisionapp.defaultProps = {
  options: [],
};
