class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>
        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}