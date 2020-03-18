import React, { Component } from "react";
import { connect } from "react-redux"; 
import ReusableForm from "./ReusableForm";
import { updateGrid } from "../../base/utils/updateGrid";
import Input from "./SingleInput";
import Select from "./Select";
import { bold } from "../../base/constants/AppConstants";
import { Col } from "reactstrap";
import { formSchema } from "../../base/utils/testFormSchema";
import { renderFields } from "../../base/utils/renderFields";

class TestForm extends Component {
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
        // {
        //   name: "userCode",
        //   placeholder: "Enter User Code",
        //   type: "text",
        //   label: "Code *"
        // },
        // {
        //   name: "payType",
        //   default: "Custom Earnings",
        //   type: "select",
        //   label: "Type",
        //   options: ["Custom Earnings", "Custom Benefit Plan"]
        // },
        // {
        //   name: "name",
        //   placeholder: "Enter Payment Name",
        //   type: "text",
        //   label: "Custom Payment Name *"
        // },
        // {
        //   name: "taxability",
        //   default: "Non-Taxable",
        //   type: "select",
        //   label: "Taxability *",
        //   options: [
        //     "Non-Taxable",
        //     "Limit-YTD",
        //     "Limit-QTD",
        //     "Limit-MTD",
        //     "Taxable/Exclude",
        //     "Imputed"
        //   ]
        // },
        // {
        //   name: "eemax",
        //   placeholder: "Enter Maximum Limit",
        //   type: "text",
        //   label: "Maximum Limit"
        // }
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

      const payload = {
        taxCode: this.state.customTaxCode,
        name: this.state.customTaxName
      };
      console.log(payload)
      const mode = this.props.mode;
      if (mode === "Edit") {
        rowid = this.props.rowIndex;
      }
      // Calls external updateGrid function located in ./base/utils
      updateGrid(payload, rowid, mode);

      close();
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
        console.log(state)
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

    this.setInitalValues;
  }

  render() {
    const { formProps } = this.props;
    const { permissions, close, pgid } = formProps;
    const { handleDelete, handleSubmit, resetForm } = this;
console.log(`YOu are in the worksiteform`)
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

export default connect(mapStateToProps, null)(TestForm);
