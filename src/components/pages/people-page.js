import React, {Component} from 'react';


import { PeopleList, PersonDetails } from '../sw-components';

import Row from '../row';


export default class PeoplePage extends Component {
    
    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    }
 
    render () {

        return (
            <Row left={<PeopleList onItemSelected={this.onPersonSelected} />} 
                 right={<PersonDetails itemId={this.state.selectedPerson} />}
            />
        );
    }
}