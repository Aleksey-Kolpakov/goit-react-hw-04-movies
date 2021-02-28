import React from 'react';
import {NavLink} from 'react-router-dom'
import routes from '../../routes'
import styles from './AppHeader.module.css'
const AppHeaer = () => {
    return (  
         <ul className={styles.headerContainer} >
          <li>
            <NavLink exact to={routes.home} className={styles.Navlink} activeClassName={styles["active-Navlink"]}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.movies} className={styles.Navlink} activeClassName={styles["active-Navlink"]}>Movies</NavLink>
          </li>
        </ul>
    );
}
 
export default AppHeaer ;