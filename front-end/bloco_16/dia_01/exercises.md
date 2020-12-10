# Exercícios `Redux` resolvidos do FreeCodeCamp

### 1 [Define an Action Creator](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator)

<details>
 <summary>Resposta</summary>
 
```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => {
  return action;
}
```
</details>

### 2 [Dispatch an Action Event](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event)

<details>
 <summary>Resposta</summary>

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
```
</details>

### 3 [Handle an Action in the Store](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

<details>
 <summary>Resposta</summary>

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: true
      }
      default:
        return state
    }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
</details>

### 4 [Use a Switch Statement to Handle Multiple Actions](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

<details>
 <summary>Resposta</summary>

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type){
    case 'LOGIN':
      return {
        ...state,
        authenticated: true
      }
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false
      }
    default:
      return state
      
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```
</details>

### 5 [Use const for Action Types](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types)

<details>
 <summary>Resposta</summary>

```js
// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```
</details>

### 6 [Register a Store Listener](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener)

<details>
 <summary>Resposta</summary>

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(count = count + 1)
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```
</details>

### 7 [Combine Multiple Reducers](https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers)

<details>
 <summary>Resposta</summary>

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);
```
</details>

### 8 [Send Action Data to the Store](https://www.freecodecamp.org/learn/front-end-libraries/redux/send-action-data-to-the-store)

<details>
 <summary>Resposta</summary>

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case 'ADD_NOTE':
      return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```
</details>

### 9 [Write a Counter with Redux](https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux)

<details>
 <summary>Resposta</summary>

```js
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.value
        case 'DECREMENT':
            return state - action.value
        default:
            return state
    }

}
const incAction = () => {
    return {
        type: INCREMENT,
        value: 1
    }
}

const decAction =  () => {
    return {
        type: DECREMENT,
        value: 1
    }
}

const store = Redux.createStore(counterReducer);
```
</details>

### 10 [Never Mutate State](https://www.freecodecamp.org/learn/front-end-libraries/redux/never-mutate-state)

<details>
 <summary>Resposta</summary>

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [
        ...state,
        action.todo
      ]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}
```
</details>

### 11 [Use the Spread Operator on Arrays](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-the-spread-operator-on-arrays)

<details>
 <summary>Resposta</summary>

```js
const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return [...state, action.todo];
      return;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: "ADD_TO_DO",
    todo,
  };
};

const store = Redux.createStore(immutableReducer);
```
</details>

### 12 [Remove an Item from an Array](https://www.freecodecamp.org/learn/front-end-libraries/redux/remove-an-item-from-an-array)

<details>
 <summary>Resposta</summary>

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
      // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```
</details>

### 13 [Copy an Object with Object.assign](https://www.freecodecamp.org/learn/front-end-libraries/redux/copy-an-object-with-object-assign)

<details>
 <summary>Resposta</summary>

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, {status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
</details>
