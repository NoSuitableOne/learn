import React from 'react';

function Title (props) {
    return (
        <h1>Shopping List for {props.name}</h1>
    );
}

function ListItem (props) {
    return (
        <ul>
            {
                props.lists.map(
                    (item) => {return (<li>{item}</li>)}
                )
            }
        </ul>
    );
}

class ShoppingList extends React.Component {
    render () {
        const lists = ['Instagram', 'WahtsApp', 'Oculus'];

        return (
            <div className='shopping-list'>
                <Title name='Mark' />
                <ListItem lists={lists} />
            </div>
        )
    }
}

export default ShoppingList;