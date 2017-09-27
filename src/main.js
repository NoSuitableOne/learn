import React from 'react';
import ReactDom from 'react-dom';

import Base from './css/base.css';

import Welcome from './script/component/welcome';
import ShoppingList from './script/component/shoppinglist';
import Game from './script/component/all';

ReactDom.render (
    <ShoppingList name="Mark"/>,
    document.getElementById('root')
)
