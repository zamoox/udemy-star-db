import React, {Component} from 'react';

import './item-details.css';
import Spinner from '../spinner';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>            
        </li>
    ); 
};

export {
    Record
};

export default class ItemDetails extends Component {
    
    state = {
        item: null,
        loading: true,
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId || 
            this.props.getData !== prevProps.getData) {
            this.setState({loading: true});
            this.updateItem();
        }
    }

    updateItem = () => {
        const {itemId, getData} = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
        .then(item => this.setState({item, loading: false}));
    }

    render () {

        if (!this.state.item) {
            return <span>Select an item please!</span>;
        }


        const { item, loading } = this.state;

        const { name, img } = item;

        if (loading) {
            return <Spinner/>;
        }

        return (
            <div className = "item-details card">
                <img src={img} alt={name}></img>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}