import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  //const counter = useSelector((state:any) => state.reducer.counter);
  const counter = useSelector((state:any) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const incrementHandler =()=>{
    dispatch(counterAction.increment())
  }
  const decrementHandler =()=>{
    dispatch(counterAction.decrement())
  }
  const incrementbyfiveHandler = () =>{
    dispatch(counterAction.incrementbyfive(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };


  // const incrementHandler =()=>{
  //   dispatch({type:"increment"})
  // }
  // const decrementHandler =()=>{
  //   dispatch({type:"decrement"})
  // }
  // const incrementbyfiveHandler = () =>{
  //   dispatch({type:'incrementbyfive',amount:5})
  // }
  // const toggleCounterHandler = () => {
  //   dispatch({type:"toggle"})
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementbyfiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
