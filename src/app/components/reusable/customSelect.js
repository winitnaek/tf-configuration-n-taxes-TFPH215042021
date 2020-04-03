import React, { Component } from "react";
import {Input, FormFeedback, Col, FormGroup, Label} from "reactstrap";
import {AsyncTypeahead} from "react-bootstrap-typeahead";

class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        options: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }


  clearSelect(){
    this.typeahead.getInstance().clear();
  }

  handleChange(selectedOptions) {
    const value = (selectedOptions.length > 0) ? selectedOptions : '';
    this.props.onChange(this.props.id, value);
  }
  
  render() {
    let defaultSet = false;
    const renderError = this.props.error ? (
      <div style={{color:'red', fontSize:12, paddingTop:4}}>{this.props.error}</div>
    ) : null;

    return (
      <FormGroup>
        <Col>
          <Label>{this.props.label}
              {this.props.required && <Label style={{color:'red', fontSize: 20}}>{" *"}</Label> }
          </Label>
          {(this.props.fieldinfo.typeahead) ? (
            <AsyncTypeahead
              id={this.props.id}
              isLoading={this.state.isLoading}
              //labelKey={option => `${option.login}`}
              defaultInputValue= {this.props.value || ''}
              ref={(typeahead) => this.typeahead = typeahead}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
              disabled={this.props.disabled}
              onSearch={(query) => {
                if(this.props.fieldinfo.async){
                  this.setState({isLoading: true});
                    fetch(`https://api.github.com/search/users?q=${query}`)
                    .then(resp => resp.json())
                    .then(json => this.setState({
                      isLoading: false,
                      options: json.items,
                    }));
                }else {
                    this.setState({options: this.props.fieldinfo.options})
                }
              }}
              multiple={this.props.fieldinfo.multiselect}
              error={this.props.error}
              options={this.state.options}
          />
          ):(
              <Input
                type="select"
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                disabled={this.props.disabled}
                onChange={this.props.onChange}
                invalid={this.props.error}
              >
                {!defaultSet && (
                <option value="" disabled>
                  {this.props.placeholder}
                </option>
              )}
                  {this.props.fieldinfo.options.map(opt => {
                    return (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    );
                  })}
              </Input>
          )}
          {renderError}
        </Col>
        <button onClick={() => this.typeahead.getInstance().clear()}>Clear</button>
      </FormGroup>
    );
  }
}

export default CustomSelect;
