import {CHANGE_TEXT, BUTTON_CLICK} from '../constants/actionType'

//初始状态
const initState = {
    text: 'hello'
}
export default function myApp(state = initState, action){
    switch(action.type){
        case 'CHANGE_TEXT':
            return {
                text:state.text=='hello' ? 'lixue' : 'hello'
            }
        case 'BUTTON_CLICK':
            return {
                text:'hello lixue'
            }
        default:
            return state;
    }
}