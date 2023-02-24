import styles from '@/styles/Navbar.module.css'
import { Avatar } from '@mui/material'
import { GitHub } from '@mui/icons-material'
export default function Home(){
    return (
        <>
        <div className={styles.navbar}>
                <ul className={styles.ele}>
                    <li className={styles.hov}>Home</li>
                    <li className={styles.hov}>Services</li>
                    <li className={styles.hov}>About Us</li>
                    <li className={styles.hov}>Contact Us</li>
                </ul>
            
            <ul className={styles.ele}>
                <li  className={styles.hov}>
                <Avatar/>
                </li>
            </ul>
        </div>
        </>
    )
}