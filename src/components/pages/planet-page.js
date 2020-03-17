import React, {Component} from 'react';


import { PlanetList, PlanetDetails } from '../sw-components';

import Row from '../row';

export default class PlanetPage extends Component {
    
    state = {
        selectedPlanet: 3
    }

    onPlanetSelected = (selectedPlanet) => {
        this.setState({ selectedPlanet });
    }
 
    render () {

        return (
            <Row left={<PlanetList onItemSelected={this.onPlanetSelected} />} 
                 right={<PlanetDetails itemId={this.state.selectedPlanet} />}
            />
        );
    }
}