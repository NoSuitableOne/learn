import React from 'React';

class ShoppingList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        return {
            <div className='shopping-list'>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WahtsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        }
    }
}

// ShoppingList.propTypes = {
//     name: React.PropTypes.string
// }
//
// ShoppingList.defaultProps = {
//     name: 'Your shopping car'
// }



export default ShoppingList;