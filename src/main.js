import React from 'react';
import ReactDom from 'react-dom';

import Base from './css/base.css';

import Welcome from './script/component/welcome';
import ShoppingList from './script/component/shoppinglist';


ReactDom.render(
    <ShoppingList name='Mark'/>,
    document.getElementById('root')
)