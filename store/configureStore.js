import { createStore } from 'redux'
import myApp from '../reducer/reducer'

export default function configureStore(initState){
    const store = createStore(myApp, initState);
    return store;
}