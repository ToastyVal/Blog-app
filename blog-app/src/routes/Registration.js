import React from "react";

// const Registration = () => {
//   return (
//     <>
//       <form>
//         <input type="text"></input>
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

class Regist extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: "Howdy",
    };
  }
  update(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>this.state.text</h1>
      </>
    );
  }
}

export default Registration;
