# Redux

Redux follows the flux architecture created by Facebook to manage React state. It can also be used in other frameworks.

## 1. Store

A store holds the whole state tree of your application.
The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it.

To import and create a store :

```javascript
import {createStore} from 'redux';

const store = createStore( ,1);
```