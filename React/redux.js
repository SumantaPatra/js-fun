// for write operation --> dispatch --> action --> reducer --> update slice (write data)
// for read --> update data through selector which has subscribed 
// template 
// create a store 

export const appStore = configureStore({
    // pass all small store reducer to app store
    reducer:{
        cart:cartReducer // add all availaible slice reducer
    }
}) // pass the store as a props to provider and wrap the app 

{/* <Provider store={appStore}><Myapp/></Provider> */}

// create a slice 

// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//        items:[] 
//     },
//     reducers:{
//         addItem:function(state,action){
                // mutating the state
//             state.item.push(action.payload)
//         },
//         clearItem:function(state,action){
//             state.item.length=0
//         }
//     }
// })

// export {addItem,clearItem} = cartSlice.action;
// export createSlice.reducer;

// write data to store (after creating store and slices)

const handleClick = (item)=>{
    const dispatch = useDispatch();
    // addItem from action
     dispatch(addItem("item1")) // parameter of addItem avaialble as action.apayload
     // after update which component subscribe the store it render automatically
} 
// read the data using selector
// subscribing to the part of the  store using selector
// const cart = useSelector((store)=>store.cart.item) // cart is an array as we defined in slice
// const store = useSelector((store)=>store) 
// const cart = store.cart.item // we acn do like this but for optmisation we only subscribing the part ehat is required








