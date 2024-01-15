// hard code the values for preventing typos:
const ACTIONTYPES = {
    INCREAMENT : "increament",
    DECREAMENT : "decreament"
  }


// reducer function must be a pure function, i.e it returns the same value in same input
export default function reducer(state, action){
    // this function returns the new state
    // you can have different action on different types of action using a switch statement
    switch(action.type){
      case ACTIONTYPES.INCREAMENT:
        return {count : state.count + 1, total: state.total+1}
      case ACTIONTYPES.DECREAMENT:
        return {count:state.count - 1, total: state.total+1}
      default: 
        return {count: state}
        
    }
  }