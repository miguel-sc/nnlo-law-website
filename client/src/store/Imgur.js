const FETCH = 'Imgur/FETCH'

const Imgur = (state = {}, action = {}) => {
  switch(action.type) {
    // do stuff
    default: return state
  }
}

export const fetchImgur = () => {
  return {
    type: FETCH
  }
}

export default Imgur
