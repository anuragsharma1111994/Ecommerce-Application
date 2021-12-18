import { SET_SELECTED_TAB } from './action.type'

export const setSelectedTabSuccess = (selectedTab) => ({
    type: SET_SELECTED_TAB,
    payload: { selectedTab }
})

export function setSelectedTab(selectedTab){
    return dispatch => {
        dispatch(setSelectedTabSuccess(selectedTab))
    }
}