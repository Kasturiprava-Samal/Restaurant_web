import classes from './HeaderCartButton.module.css';
import React,{useContext,Fragment} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-context';


const Button=(props)=>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);

    return (
        <Fragment>
            <button className={classes.button} onClick={props.onClickCartButton}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart 
                </span>
                <span className={classes.badge}>
                     {numberOfCartItems}
                </span>
            </button>
        </Fragment>
    )
};

export default Button;
