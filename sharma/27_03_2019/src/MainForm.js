import React from 'react';
import { reduxForm, Field } from 'redux-form';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
  }
  fnMainForm(p) {
    window.alert(JSON.stringify(p));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.fnMainForm)}>
          <div>
            First Name
            <Field type="text" name="firstName" component="input" />
          </div>
          <div>
            Last Name
            <Field type="text" name="lastName" component="input" />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
MainForm = reduxForm({
  form: 'MainForm'
})(MainForm);
export default MainForm;
