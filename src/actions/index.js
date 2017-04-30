import fetch from 'isomorphic-fetch'

import { API_BASE } from "../config"

export const DB_PROJECTS_REQUEST = 'DB_PROJECTS_REQUEST'
export const DB_PROJECTS_RECEIVE = 'DB_PROJECTS_RECEIVE'
export const DB_CATEGORY_REQUEST = 'DB_CATEGORY_REQUEST'
export const DB_CATEGORY_RECEIVE = 'DB_CATEGORY_RECEIVE'

function requestDBProjects() {
  return {
    type: DB_PROJECTS_REQUEST
  }
}

function receiveDBProjects(json) {
  return {
    type: DB_PROJECTS_RECEIVE,
    data: json,
    receivedAt: Date.now()
  }
}

function requestDBCategory(project, slug) {
  return {
    type: DB_CATEGORY_REQUEST,
    slug
  }
}

function receiveDBCategory(project, slug, json) {
  return {
    type: DB_CATEGORY_RECEIVE,
    slug,
    data: json,
    receivedAt: Date.now()
  }
}

function fetchDBProjects() {
    return dispatch => {
        dispatch(requestDBProjects())
        return fetch(`${API_BASE}projects`)
        .then(response => response.json())
        .then(json => dispatch(receiveDBProjects(json)))
    }
}

function fetchDBCategory(project, slug) {
  return dispatch => {
    dispatch(requestDBCategory(project, slug))
    return fetch(`${API_BASE}${project}/browse/${slug}`)
    .then(response => response.json())
    .then(json => dispatch(receiveDBCategory(project, slug, json)))
  }
}

function shouldUpdateDBProjects(state, slug) {
    // TODO
    return true;
}

function shouldUpdateDBCategory(state, project, slug) {
    // TODO
    return true;
}

export function updateProjects() {
  return (dispatch, getState) => {
    if (shouldUpdateDBProjects(getState())) {
      return dispatch(fetchDBProjects())
    }
  }
}

export function updateCategory(project, slug) {
  return (dispatch, getState) => {
    if (shouldUpdateDBCategory(getState(), project, slug)) {
      return dispatch(fetchDBCategory(project, slug))
    }
  }
}