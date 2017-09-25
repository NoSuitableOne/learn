import React from 'react';
import ReactDom from 'react-dom';

import Base from './css/base.css';

import Welcome from './script/component/welcome';
import ShoppingList from './script/component/shoppinglist';
import Game from './script/component/all';

ReactDom.render (
    <Game info="Powerd by React"/>,
    document.getElementById('root')
)