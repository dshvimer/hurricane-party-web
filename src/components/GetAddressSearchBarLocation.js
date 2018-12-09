import React from 'react'
import AddressSearchBar from './AddressSearchBar';

import Script from 'react-load-script'

class GetAddressSearchBarLocation extends React.Component {
    // Define Constructor
    constructor(props) {
      super(props);
  
      // Declare State
      this.state = {
        city: '',
        query: ''
      };
  
      // Bind Functions
      this.handleScriptLoad = this.handleScriptLoad.bind(this);
      this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  
    }
    
    handleChange = e => {
        this.setState({locality: event.target.value});
      }

    handleScriptLoad() {
      // Declare Options For Autocomplete
      var options = {
        types: ['(cities)'],
      };
  
      // Initialize Google Autocomplete
      /*global google*/ // To disable any eslint 'google not defined' errors
      this.autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        options,
      );
  
      // Fire Event when a suggested name is selected
      this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }
    
    handlePlaceSelect() {
  
      // Extract City From Address Object
      let addressObject = this.autocomplete.getPlace();
      let address = addressObject.address_components;
  
      // Check if address is valid
      if (address) {
        // Set State
        this.setState(
          {
            city: address[0].long_name,
            query: addressObject.formatted_address,
          }
        );
      }
    }
  
    render() {
      return (
        <div>
          <Script
            url="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            onLoad={this.handleScriptLoad}
          />
          
          <AddressSearchBar 
            id='autocomplete'
            value={this.state.locality}
            onChange={this.handleChange} 
          />
        </div>
      );
    }
  }
  
  export default GetAddressSearchBarLocation