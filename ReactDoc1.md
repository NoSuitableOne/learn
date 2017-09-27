React是个啥？[这篇文章所有问题的标准答案：React官网](https://facebook.github.io/react/)，**所有答案都在这儿**。
这篇文章简要地讲几个关键概念，循序渐进地理解这些概念就算是认识React了。

# Step1:
用React实现一个世界通用标准 `Hello World`
核心代码都在`js`(`jsx`)文件里实现。为什么这么做？标准答案还是在上面的链接里


![hello world](http://upload-images.jianshu.io/upload_images/1915742-d6e7ee9b6868a03f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const ele = <div>Hello World</div>;
ReactDom.render (
    ele,
    document.getElementById('root')
);
```
`html`部分特别简单，关键语句就这一句（类比AngularJS的概念，对应`<div ng-app="app"></div>`），所以下面就忽略`html`部分了
```html
...
<div id="root"></div>
...
```
# Step2:
使用React创建组件


![React组件](http://upload-images.jianshu.io/upload_images/1915742-bd936a14258db4ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```javascript
class ShoppingList extends React.Component {
    render () {
        return (
            <div className='shopping-list'>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WahtsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}
```
或者可以把大组件再拆分，实际上React也确实推荐我们这么做：
```javascript
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
```
这里说明一下，通过观察代码可以看出，我们使用了两种不同的方式创建一个组件`class xxx extends React.Component`、`function xxx`，此外还有一种方法
```javascript
var xxx = React.createClass({
    ...
    render: function() {
        return ...;
    }
});
```
这里着重讲一下前两种方法，也就是我们上面举例中采用的方法
- `class xxx extends React.Component`：这里继承了`React.Component`这个类，非常容易理解，创建好的`xxx`组件将实现并扩展`React.Component`类定义的方法。这样的类是会被实例化后再调用的，同时我们可以在构造方法中用`state`定义组件的状态（`state`我们稍后再谈）
- `function xxx`：这种方法是非常适合创建无状态组件的，所谓的无状态组件就是组件本身没有状态，上面例子里三个组件都属于无状态组件。这种方法的优势是无需实例化，劣势就是无法保存组件自己的状态。
还有第三种方法`var xxx = React.createClass`这种方法很明显使用的是`ES5`的语法，历史的车轮已经碾过`ES5/6/7...`了，可以放弃这种语法了（这种创建方法本身会有问题，React也已经不建议使用这种方法了）。当然，如果你在技术上比较<s>谨</s>(落)<s>慎</s>(后)，还是查阅上面的标准答案。