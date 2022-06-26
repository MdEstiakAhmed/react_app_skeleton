const SET_TOKEN = 'SET_TOKEN';
const UNSET_TOKEN = 'UNSET_TOKEN';

export const handleToken = (dispatch) => ({
    setToken: (value) => dispatch({
        type: SET_TOKEN,
        payload: value
    }),
    unsetToken: () => dispatch({
        type: UNSET_TOKEN,
    })
});

const tokenReducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem('token', action.payload)
            return action.payload;
        case UNSET_TOKEN:
            localStorage.removeItem('token')
            return undefined;
        default:
            return state;
    }
}

export default tokenReducer;