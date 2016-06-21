import * as types from '../constants/actionType'

//action
export function changeText(){
    return {
        type: types.CHANGE_TEXT
    }
}
export function buttonClick(){
    return {
        type: types.BUTTON_CLICK
    }
}