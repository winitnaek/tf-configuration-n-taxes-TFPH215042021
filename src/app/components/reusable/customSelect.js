import React, { Component } from "react";
import {Input, FormFeedback, Col, FormGroup, Label} from "reactstrap";
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import autocompleteselectAPI from '../../api/autocompleteselectAPI';

class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        options: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  handleChange(selectedOptions) {
    const value = (selectedOptions.length > 0) ? selectedOptions : '';
    this.props.onChange(this.props.id, value);
  }

  onSearchHandler(query){
    if(this.props.fieldinfo.isasync){
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
  }
  
  render() {
    let defaultSet = false;
    const renderError = this.props.error ? (
      <div style={{color:'red', fontSize:12, paddingTop:4}}>{this.props.error}</div>
    ) : null;
    
    if (this.props.isReset) {
      this.typeahead && this.typeahead.getInstance().clear();
      //this.typeahead && this.typeahead.getInstance()._updateSelected([this.props.value]);
    }

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
              labelKey={option => `${option}`}
              defaultInputValue= {this.props.value || ''}
              ref={(typeahead) => this.typeahead = typeahead}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
              value={this.props.value}
              disabled={this.props.disabled}
              onSearch={this.onSearchHandler}
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
      </FormGroup>
    );
  }
}

export default CustomSelect;
