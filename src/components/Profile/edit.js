import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './profile.css'
import ImageUploader from 'react-images-upload';
import fire from '../Fire/fire'
class Edit extends Component {
      constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.usersDB = fire.database().ref("Users");
        this.state = {
          loaded: false,
          name: '',
          rating: '',
          image: [],
          tel: '',
          email: '',
          zipcode: '',
          city: '',
          loaded: false
        };
      }

    componentWillUnmount() {
      this.firebaseRef.off();
    }

    // If the component gets mounted successfully, authenticate the user
    componentDidMount(){
      fire.auth().onAuthStateChanged((user) => {
        // If the user is detected, save it to the current state
        if(user) {
          this.setState({user});
          this.state = {
            name: '',
            rating: '',
            image: [],
            tel: '',
            email: '',
            zipcode: '',
            city: '',
          };
          this.firebaseRef = fire.database().ref();
          this.firebaseRef.on('value', dataSnapshot => {
            let name = dataSnapshot.child("Users/" + user.uid + "/Name").val();
            let rating = dataSnapshot.child("Users/" + user.uid + "/Average_review").val();
            let image = dataSnapshot.child("Users/" + user.uid + "/User_Pic").val();
            let tel = dataSnapshot.child("Users/" + user.uid + "/Phone").val();
            let email = dataSnapshot.child("Users/" + user.uid + "/UCSD_Email").val();
            let zipcode = dataSnapshot.child("Users/" + user.uid + "/Zip").val();
            let city = dataSnapshot.child("Users/" + user.uid + "/City").val();


            this.setState({name});
            this.setState({rating});
            this.setState({image});
            this.setState({tel});
            this.setState({email});
            this.setState({zipcode});
            this.setState({city});
            this.setState({loaded: true});
          });
        }
        // Otherwise set the current user to null
        else {
          this.setState({user: null});
          //localStorage.removeItem('user');
        }
      });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      if(this.state.user.uid) {
        let userID = this.state.user.uid;
        console.log('user')
        console.log(userID);
        const UCSD_Email = this.state.email;
        const User_Pic = this.state.image;
        const Name = this.state.name;
        const Phone = this.state.tel;
        const Zip = this.state.zipcode;
        const City = this.state.city;
        let userDB = this.usersDB;

        this.usersDB.child(userID).update({"UCSD_Email": UCSD_Email,"Name":Name, "User_Pic" : User_Pic, "Phone": Phone, "Zip" : Zip, "City":City})
      }
    }
    
    onDrop(file, picture) {
      this.setState({image: this.state.image.concat(picture)});
      console.log(picture);
    }

    render(){
        return(
            <div>
            {this.state.loaded ?
                <form className="profile-form"  >
                <img className="profile-img" src={this.state.image[this.state.image.length-1]} alt="did not load" />

                  <ImageUploader
                    withIcon={false}
                    withPreview ={false}
                    buttonText='Upload Picture'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage={true}
                  />
                  <label>Name:</label>
                  <input onChange= {e => this.setState({name: e.target.value})} value={this.state.name}/>
                  <br />

                  <label>Tel:</label>
                  <input onChange= {e => this.setState({tel: e.target.value})} value={this.state.tel}/>
                  <br />
                  <label>UCSD Email:</label>
                  <input onChange= {e => this.setState({email: e.target.value})} value={this.state.email}/>
                  <br />
                  <label>Zipcode:</label>
                  <input onChange= {e => this.setState({zipcode: e.target.value})} value={this.state.zipcode}/>
                  <br />
                  <label>City:</label>
                  <input onChange= {e => this.setState({city: e.target.value})} value={this.state.city}/>
                  <br />
                  <a href="/profile" className="profile-button" onClick={this.handleSubmit}>Save Changes</a>
                </form>
                :
            console.log("error")}
            </div>
        );
    }
}

export default Edit;
