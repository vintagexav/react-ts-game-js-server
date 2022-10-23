const setReferenceTime = (referenceTime: number) => {
  return {
    type: 'SET_REFERENCE_TIME',
    payload: referenceTime
  };
};
export default {
  setReferenceTime
};
