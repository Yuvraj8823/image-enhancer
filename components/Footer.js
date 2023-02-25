import styles from '@/styles/Footer.module.css'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { BottomNavigation } from '@mui/material'

export default function Footer(){
    return(
        <footer className={styles.footer}>
  	 	<div className={styles.container}>
  	 	<div className={styles.row}>
  	 		<div className={styles.footercol}>
  	 			<h4>Developers</h4>
  	 			<ul className={styles.ul}>
  	 				<li><a href="https://www.linkedin.com/in/yuvraj-singh-raghuwanshi-272485253/" target='_blank'>Yuvraj Singh Raghuwanshi</a></li>
  	 				<li><a href="#">Om Soni</a></li>
  	 				<li><a href="#">Vishwas Johari</a></li>
					<li><a href='#'>Shubham Singh</a></li>
					<li><a href='#'>Shreya mishra</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		
  	 		<div className={styles.footercol}>
  	 			<h4>follow us</h4>
  	 			<div className={styles.sociallinks}>
  	 				<GitHub/>
  	 				<LinkedIn/>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	 
  </footer>
    )
}