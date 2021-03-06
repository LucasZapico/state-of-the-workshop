export const addItem = item => {
  console.log('AddItem ran');

  return (dispatch, getState, { getFirestore }) => {
    console.log('From Action', item);
    // call db
    const firestore = getFirestore();
    console.log(firestore)
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
