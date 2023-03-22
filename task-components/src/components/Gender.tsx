import React from 'react';

class Gender extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    );
  }
}

export default Gender;
