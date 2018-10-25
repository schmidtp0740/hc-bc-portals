const rxinfo = (state = [], action) => {
  switch (action.type) {
    case 'RX_INFO':
      console.log('value of RX_INFO: ', action.data);
      return state = action.data;
    case 'RX_ERROR':
      return state = action.data;
    case 'UPDATE_RX':
      console.log('value of UPDATE_RX: ', action.data);
      state = [];
      return state = action.data;
    default:
      return state;
  }
}

export default rxinfo;