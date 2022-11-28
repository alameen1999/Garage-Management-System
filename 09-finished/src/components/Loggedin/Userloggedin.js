import classes from './Userloggedin.module.css';
import { FcAutomotive } from "react-icons/fc";
import { FcExternal,  FcViewDetails,FcReadingEbook,FcCalculator,FcComboChart} from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import AddProduct from '../Profile/AddProduct';
const Userloggedin =()=>{
    return(
        
        <table>
                {/* Quick Action */}
           
            <tr>
                <td>
                    <FcExternal  size = '150px'  className={classes.icon} ></FcExternal>
                    <h2 className={classes.title}>Add Product</h2>
                </td>
                <td>
                    <FcViewDetails size = '150px'  className={classes.icon}><span>Job Card</span></FcViewDetails>
                    <h2 className={classes.title}>JOB CARD</h2>
                </td>
                <td>
                <NavLink  to = '/employeedetails'>
                    <FcReadingEbook size = '150px'   className={classes.icon}><span>Employee Details</span></FcReadingEbook>
                    <h2 className={classes.title}>Employee Details</h2>
                    </NavLink>
                </td>





            </tr>
            <tr>
                <td>
                    <FcAutomotive size = '150px' className={classes.icon}><span> Inventory</span></FcAutomotive>
                    <h2 className={classes.title}>Inventory</h2>
               </td>

                <td>
                    
                    <FcCalculator size = '150px'  className={classes.icon}></FcCalculator>
                    <h2 className={classes.title}>Estimation</h2>
               
                </td>

                <td>
                    <FcComboChart  size = '150px' className={classes.icon}><span>Revenue Report</span></FcComboChart>
                   <h2 className={classes.title}> Revenue Report</h2>
                </td>
            </tr>
        </table>
    )

}

export default Userloggedin;