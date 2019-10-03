export const addItem = item => {
  console.log('AddItem ran');

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log('From Action', item);
    // call db
    const firestore = getFirestore();
    firestore
      .collection('items')
      .add({
        ...item,
        dateAdded: new Date()
      })
      .then(() => {
        dispatch({ type: 'ADD_ITEM', item });
      })
      .catch(err => {
        dispatch({ type: 'ADD_ITEM_ERROR', err });
      });
  };
};
