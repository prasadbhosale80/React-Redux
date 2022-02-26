import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const isAuthuntication = useSelector((state:any) => state.authReducer.isAuthuntication);
  const dispatch = useDispatch()
  const logoutHandler = (event:any)=>{
    event.preventDefault();
    dispatch(authAction.isLogout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     { isAuthuntication && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
