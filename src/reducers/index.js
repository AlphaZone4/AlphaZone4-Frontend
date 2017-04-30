import { combineReducers } from 'redux'

import {
    DB_PROJECTS_REQUEST, DB_PROJECTS_RECEIVE,
    DB_CATEGORY_REQUEST, DB_CATEGORY_RECEIVE
} from '../actions/'

function databaseCategory(state = {
    isFetching: false,
    data: {}
}, action) {
    switch(action.type)
    {
        case DB_CATEGORY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case DB_CATEGORY_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        default:
            return state;
    }
}

function projects(state = {
    isFetching: false,
    projects: {}
}, action) {
    switch(action.type)
    {
        case DB_PROJECTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case DB_PROJECTS_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                projects: action.data.projects
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    database: databaseCategory,
    projects
})

export default rootReducer