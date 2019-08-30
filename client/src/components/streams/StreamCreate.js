import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // without redux form we would have had to disable default so browser doesnt
  // refresh on submit, burt react-form takes care of that for us
  // this.props.handleSubmit function comes from react-form and we can pass it our func
  // onSubmit(event) {
  //   event.preventDefault();
  // }
  // all the values inside our form
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
