import React, { Component } from "react";
import { connect } from "react-redux"; 
import ReusableForm from "./ReusableForm";
import { updateGrid } from "../../base/utils/updateGrid";
import { renderFields } from "../../base/utils/renderFields";
import { closeForm, saveFormData } from "../actions/formActions"
import { bindActionCreators } from "redux";
class WorksiteCompaniesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      street1: "",
      street2: "",
      city: "",
      county: "",
      state: "",
      zip: "",
      stateOptions: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'GA',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    };

    const { formProps } = this.props;
    const { close, change, deleteRow, pgid } = formProps;

    this.resetForm = () => {
      this.setState({
        location: "",
        street1: "",
        street2: "",
        city: "",
        county: "",
        state: "",
        zip: "",
      });
    };

    this.handleChange = event => {
      const {target} = event;
      const {value} = target;
      const {name} = target;
      console.log(name, value)
      this.setState({
        [name]: value 
      });
    };

    this.displayFormFields = () => {
      const  formSchema  = [
        {
          name: "location",
          id: "location",
          placeholder: "Enter Worksite" ,
          type: "text",
          label: "Worksite",
          value: this.state.location,
          onChange: this.handleChange
        },
        {
          name: "street1",
          id: "street1",
          placeholder: "Enter Street" ,
          type: "text",
          label: "Street1",
          value: this.state.street1,
          onChange: this.handleChange
        },
        {
          name: "street2",
          id: "street2",
          placeholder: "Enter Street2" ,
          type: "text",
          label: "Street2",
          value: this.state.street2,
          onChange: this.handleChange
        },
       
        {
          name: "city",
          id: "city",
          placeholder: "Enter City" ,
          type: "text",
          label: "City",
          value: this.state.city,
          onChange: this.handleChange
        },
        {
          name: "county",
          id: "county",
          placeholder: "Enter County" ,
          type: "text",
          label: "County",
          value: this.state.county,
          onChange: this.handleChange
        },
        {
          name: "state",
          id: "state",
          placeholder: "Enter State" ,
          type: "select",
          label: "State",
          options: this.state.stateOptions,
          value: this.state.state,
          onChange: this.handleChange
        },
        {
          name: "zip",
          id: "zip",
          placeholder: "Enter Zip" ,
          type: "text",
          label: "Zip",
          value: this.state.zip,
          onChange: this.handleChange
        }
      ]
      const fields = renderFields(formSchema);
      return fields;
    };

    this.setInitalValues = () => {
      // formSchema.map(item => {
      //   this.setState({ values: {...this.state.values, item: ""}  });
      // })
    };

    this.handleSubmit = () => {
      let rowid = null;

     const {
      location,
      street1,
      street2,
      city,
      county,
      state,
      zip,
     } = this.state

      const payload = {
        location,
      street1,
      street2,
      city,
      county,
      state,
      zip,
      };
      console.log(payload)
      const mode = this.props.mode;
      if (mode === "Edit") {
        rowid = this.props.rowIndex;
      }
      // Calls external updateGrid function located in ./base/utils
      this.props.saveFormData(payload)
      updateGrid(payload, rowid, mode);
    };

    this.handleDelete = () => {
      console.log("deleting record");
      deleteRow(0); // need to pass index
      close();
    };
  }

  componentDidMount() {
    if (this.props.data) {
      console.log(this.props.data);
      const { location, street1, street2, city, county, state, zip } = this.props.data;
      if (this.props.mode === "Edit") {
        this.setState({
          location,
          street1,
          street2,
          city,
          county,
          state,
          zip,
        });
      }
      this.setState({
        
      });
    }


  }

  render() {
    const { formProps } = this.props;
    const { permissions, close, pgid } = formProps;
    const { handleDelete, handleSubmit, resetForm } = this;
    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit={handleSubmit}
        close={close}
        pgid={pgid}
        delete={handleDelete}
        showDelete={this.state.showDelete}
        reset={resetForm}
        // deletePermission={permissions.DELETE}
      >
        {this.displayFormFields()}
      </ReusableForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.formData.data,
    mode: state.formData.mode,
    rowIndex: state.formData.index
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeForm, saveFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorksiteCompaniesForm);
