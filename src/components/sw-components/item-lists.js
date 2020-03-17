import React from 'react';

import ItemList from '../item-list';

import { withData, withSwapiService, 
    withChildFunction, Compose} from '../hoc-helpers';

//render functions 
const renderName = ({name}) => <span>{name}</span>;

//mapping 
const mapPersonMethodsToProps = (service) => {
    return {
        getData: service.getAllPeople
    }
}

const mapPlanetMethodsToProps = (service) => {
    return {
        getData: service.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (service) => {
    return {
        getData: service.getAllStarships
    }
}

const PeopleList = Compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const PlanetList = Compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const StarshipList = Compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

export {
    PeopleList, 
    PlanetList, 
    StarshipList, 
};