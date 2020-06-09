
import React, {Component} from "react";
const axios = require('axios').default;

class Home extends Component {
    constructor(props) {
      super(props);
      this.setState({data:[]});
    }
    render() {
        return(
            <div>
                Test
            </div>
        )
    };
}
export default Home;