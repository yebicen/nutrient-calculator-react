import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from "axios";

export default class Imguploder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {         
          selectedFile: null,
          imgurl: "",
          recipeId: ""
          
        };
        // this.fileChangedHandler = this.fileChangedHandler.bind(this);
        // this.uploadHandler = this.uploaderHandler.bind(this);
      } 


      fileChangedHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        this.setState({selectedFile: event.target.files[0]})
      }
      

      uploadHandler = (event) => {
          event.preventDefault();
          const { selectedFile, recipeId } = this.state;
          let formData = new FormData();
          formData.append('selectedFile', selectedFile);
          formData.append('recipeId', 1);
          console.log(formData);
          // axios.post('/photos/upload', this.state.selectedFile)
          axios.post('/uploader', formData
                // {
                //   onUploadProgress: progressEvent => {
                //     console.log(progressEvent.loaded / progressEvent.total)
                //  }}
            )
              .then((response) => {
            console.log(response); // do something with the response
          });
      }
          
     
     render() {

       return (
           <div>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <label className="mr-sm-2">Image: </label>                
                   <input data-id="2" type="file" onChange={this.fileChangedHandler} />
                </FormGroup>
                <button onClick={this.uploadHandler}>Upload!</button>
              </Form>
           </div>

       );


     }
    

}