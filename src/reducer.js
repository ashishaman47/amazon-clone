//date layer at the beginning
export const initialState = {
  basket: [],
  user: null,
};

// creating selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// this reducee fun basically incrementing all of the prices inside basket and return that no, starts with zero

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, //return current state
        user: action.user, //set the user to whatever the action.user was --> so if it came as null then set the user as null or if authenticated se it to authenicated inside the store
      };
    case 'ADD_TO_BASKET':
      //Logic for adding item to basket
      return {
        ...state, //returning current state
        basket: [...state.basket, action.item], //returning basket whatever it currently was + item that we added
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    case 'REMOVE_FROM_BASKET':
      //Logic to removing item from basket

      //   cloned the basket into new basket
      let newBasket = [...state.basket];

      // here we findex the index of item we are looking for
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exits in basket, remove it

        //   it goes to that particular index and splice it or cut it
        newBasket.splice(index, 1);
      } else {
        // show red console log --> console.warn()
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not present`
        );
      }

      return {
        ...state, //return everyting that the state already had
        basket: newBasket, //and change the basket to new basket
      };
    default:
      return state;
  }
};

export default reducer;
