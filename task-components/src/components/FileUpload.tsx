import React from 'react';

class FileUpload extends React.Component {
  fileUpload: React.RefObject<HTMLInputElement>;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.fileUpload = React.createRef();
  }

  render() {
    return (
      <div>
        <label>
          Upload your foto:
          <input type="file" ref={this.fileUpload} />
        </label>
      </div>
    );
  }
}

export default FileUpload;
