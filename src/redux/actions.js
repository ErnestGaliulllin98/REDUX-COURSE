import {
  DECREMENT,
  INCREMENT,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from './types'

export function increment() {
  return {
    type: INCREMENT,
  }
}
export function decrement() {
  return {
    type: DECREMENT,
  }
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons())
    return setTimeout(() => {
      dispatch(increment())
      dispatch(enableButtons())
    }, 2000)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  }
}
