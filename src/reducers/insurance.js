const insurance = (state = null, action) => {
  switch (action.type) {
    case 'INSURANCE_RETURN':
      console.log('value of IOT_INFO: ', action.data);
      return state = action.data;
    case 'INSURANCE_ERROR':
      return state = action.data;
    default:
      return state;
  }
}

export default insurance