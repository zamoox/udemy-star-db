import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage  from '../pages/people-page';
import PlanetPage  from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';

import ErrorBoundry from '../error-boundry';
import { SwapiProvider } from "../swapi-service-context";

import SwapiService, { TestService } from "../../services";

import './app.css';

export default class App extends Component {

  state = {
    service: new SwapiService()
  };

  onServiceChanged = () => {
    this.setState(({service}) => {
      const Service = service instanceof SwapiService ?
                      new TestService(): new SwapiService();
      return {
        service: Service
      }                      
    })      
  }

  render() {
    
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.state.service}>
          <div className="stardb-app">

            <Header onServiceChanged={this.onServiceChanged}/>
            <RandomPlanet/>
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
            
          </div>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}
