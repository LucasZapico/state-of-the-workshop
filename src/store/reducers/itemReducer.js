import uuid from 'uuid/v1';
const initState = {
  items: [
    {
      title: 'VS Code',
      description:
        'Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula.',
      parent: 'Text Editors',
      link: 'url',
      tags: ['text-editor', 'dev-enviroment'],
      lastUpdate: '2019 - 10 - 02T15: 06: 04+00: 00',
      id: uuid()
    },
    {
      title: 'Session Buddy',
      description:
        'Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula.',
      parent: 'Chrome-env',
      link: 'url',
      tags: ['tab-management', 'workflow'],
      lastUpdate: '2019 - 10 - 02T15: 06: 04+00: 00',
      id: uuid()
    },
    {
      title: 'Loom',
      description:
        'Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula.',
      parent: 'Chrome-env',
      link: 'url',
      tags: ['Screencasting', 'workflow'],
      lastUpdate: '2019 - 10 - 02T15: 06: 04+00: 00',
      id: uuid()
    }
  ]
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('Add items', action.item);
      return state;
    case 'ADD_ITEM_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
