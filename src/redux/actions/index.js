/*
 * action types
*/
export const GET_SONGS_LIST = 'GET_SONGS_LIST'
export const CREATE_USER = 'CREATE_USER'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export const REMOVE_ITUNE_FROM_CART = 'REMOVE_ITUNE_FROM_CART'
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
/*
 * action creators
*/

const url = 'https://itunes.apple.com/search?term=';

export const getSongsList = (query) => dispatch => {
    let finalUrl = url + `${query.song}`;

    if (query.limit !== undefined) {
        finalUrl = finalUrl + `&limit=${query.limit}`;
    }
    if (query.entity !== undefined) {
        finalUrl = finalUrl + `&entity=${query.entity}`;
    }
    return fetch(finalUrl)
        .then(res => res.json())
        .then(songs => dispatch({ type: GET_SONGS_LIST, payload: songs.results }))
}

export const createUser = (userName) => dispatch => {
    return fetch('/api/users/' + userName)
        .then(userName => dispatch({ type: CREATE_USER, payload: userName }))
}

export const addItemToCart = (itune) => dispatch => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: itune })
}


export const removeItemFromCart = (itune) => dispatch => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: itune })
}

export const removeItuneFromCart = (itune) => dispatch => {
    dispatch({ type: REMOVE_ITUNE_FROM_CART, payload: itune })
}

export const updateSettings = (settingsObj) => dispatch => {
    dispatch({ type: UPDATE_SETTINGS, payload: settingsObj })
}
/*
export const updateSong = (song) => dispatch => {
    return put('/api/song/', {
        body: {
            updatedSong: song
        }
    })
        .then(res => res.json())
        .then(newSong => dispatch({ type: UPDATE_SONG, payload: newSong }))
}
*/