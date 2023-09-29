import { push, update, remove, ref, onValue } from 'firebase/database';
import { db } from './firebase';

export const updateEntity = (entityType, entityId, data) => {
  const entityRef = ref(db, `${entityType}/${entityId}`);
  return update(entityRef, data);
}

export const deleteEntity = (entityType, entityId) => {
  const entityRef = ref(db, `${entityType}/${entityId}`);
  return remove(entityRef);
}

export const createEntity = (entityType, data) => {
  const entitiesRef = ref(db, entityType);
  return push(entitiesRef, data);
}

export const getEntityDetails = (entityType, entityId) => {
  return new Promise((resolve, reject) => {
    const entityRef = ref(db, `${entityType}/${entityId}`);
    onValue(entityRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve({ id: entityId, ...data });
      } else {
        reject(new Error(`No se encontró ${entityType} con el ID: ${entityId}`));
      }
    }, {
      onlyOnce: true
    });
  });
};