import React from "react";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      error: undefined,
    };
  }
  onSubmitHandler(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    let error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="text-red-500">{this.state.error}</p>}
        <form
          onSubmit={this.onSubmitHandler}
          className="flex justify-between align-middle"
        >
          <input
            name="option"
            type="text"
            className=" shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none mr-3 h-12 w-[70%] "
            placeholder="add item..."
          />
          <button
            type="submit"
            className=" shadow-md text-black bg-zinc-100 rounded-md pl-2 pr-2 pt-1 pb-1 hover:shadow-inner duration-300 w-[25%] h-11 "
          >
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
