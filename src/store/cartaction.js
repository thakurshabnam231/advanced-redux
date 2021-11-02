import { uiActions } from './uislice'
import{cartActions} from './cartslice'
export const fetchCartData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-7e9a1-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('could fetch data')
            }
            const data = await response.json();
            return data;
        }
        try {
      const cartData=  await fetchData();
      dispatch(cartActions.replaceCart({
          items:cartData.items||[],
          totalQuantity:cartData.totalQuantity
      }))
        } catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: '  fetching cart added failed',
            })
            );
        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending..',
            message: ' cart added sending',
        }));

        const sendRequest = async () => {
            const response = await fetch('https://redux-7e9a1-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity}),
            })
            if (!response.ok) {
                throw new Error('error')
            }
        };
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'sucess',
                title: 'sucess',
                message: ' cart added successfully',
            })
            );
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: ' cart added failed',
            })
            );


        }

    }
}
