import React from 'react';
import ReactDom from 'react-dom';

import Base from './css/base.css';

import Welcome from './script/component/welcome';
import ShoppingList from './script/component/shoppinglist';
import Game from './script/component/all';
import Ps from './script/component/ps'
import Login from './script/component/login'

ReactDom.render (
    <Login />,
    document.getElementById('root')
)
