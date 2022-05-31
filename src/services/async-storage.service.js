import { utilService } from './util.service'
import gBoards from '../data/data'
const STORAGE_KEY = 'boards'

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  // postMany
}

function query(entityType, delay = 600) {
  let entities =
    JSON.parse(localStorage.getItem(entityType)) || _save(STORAGE_KEY, gBoards)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

function get(entityType, entityId) {
  return query(entityType)
    .then((entities) => {
      if (!entityId) return entities[0] 
      return entities.find((entity) => entity._id === entityId)
    })
}

function post(entityType, newEntity) {
  newEntity._id = utilService.makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  console.log('boards from _save', entities)
  localStorage.setItem(entityType, JSON.stringify(entities))
}

// function postMany(entityType, newEntities) {
//   return query(entityType).then((entities) => {
//     newEntities = newEntities.map((entity) => ({ ...entity, _id: _makeId() }))
//     entities.push(...newEntities)
//     _save(entityType, entities)
//     return entities
//   })
// }
