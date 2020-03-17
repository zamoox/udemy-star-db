import React, {Component} from 'react';


import { StarshipList, StarshipDetails } from '../sw-components';

import Row from '../row';

export default class StarshipPage extends Component {
    
    state = {
        selectedStarship: 3
    }

    onStarshipSelected = (selectedStarship) => {
        this.setState({ selectedStarship });
    }
 
    render () {

        return (
            <Row left={<StarshipList onItemSelected={this.onStarshipSelected} />} 
                 right={<StarshipDetails itemId={this.state.selectedStarship} />}
            />
        );
    }
}