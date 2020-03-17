import React, {Component} from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';

import icon from './default-planet.png';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 5000,
    }

    state = {
        planet: {},
        loading: true,
        error: false 
    }

    swapiService = new SwapiService();

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = () => {
        this.setState({
            error:true,
            loading:false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25)+2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({planet, error: false, loading: false, });
            })
            .catch(this.onError);
    }

    render () {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        
        const errorIndicator = error ? <ErrorIndicator/>: null;
        const spinner = loading && !error ? <Spinner/>: null;
        const content = hasData ? <PlanetView planet={planet}/>: null;  
         

        return (
            <div className = "random-planet jumbotron rounded">
                {errorIndicator}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

    const {img, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
        <div className="img_wrapper"> 
            <img src ={img ? img : icon} alt={name}></img>
        </div>
        <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
        </React.Fragment>
    );
}