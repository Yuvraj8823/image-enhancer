import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { Button,Typography,BottomNavigation } from '@mui/material'
import clearimage from '@/public/clearimage.jpg'
import { useRef,useEffect } from 'react'
import { Power3,Power0 } from 'gsap/gsap-core'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { TweenLite } from 'gsap/gsap-core'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  // for loading test animation

  let text = useRef(null)
  useEffect(()=>{
    let textLiftAnimation = gsap.timeline()
    textLiftAnimation.to(text.current,{
      opacity:1,
      y:-30,
      ease:Power3.easeOut,
      duration:2,
      delay:0.5
    })
  })

  let text2 = useRef(null)
  useEffect(()=>{
    let textLiftAnimation = gsap.timeline()
    textLiftAnimation.to(text2.current,{
      opacity:1,
      y:-30,
      ease:Power3.easeOut,
      duration:2,
      delay:0.5
    })
  })
  
  let text3 = useRef(null)
  useEffect(()=>{
    let textLiftAnimation = gsap.timeline()
    textLiftAnimation.to(text3.current,{
      opacity:1,
      y:-30,
      ease:Power3.easeOut,
      duration:2,
      delay:0.5,
    })
  })

// for resolution scaling animation

  let contain = useRef(null);
  let blurr = useRef(null);
  useEffect(()=>{
      
      gsap.fromTo(blurr.current,{
        width:'36rem'
      },{
        width:0,

        duration:10,
        scrollTrigger:{
          trigger:'blurr',
          start:'25% 39.5%',
 
          toggleActions:'restart pause reverse pause',
          scrub:true,
          pin:contain.current
        }
      })
  })

  //for low light enhancement animation

  let contain1 = useRef(null);
  let blurr1 = useRef(null);
  useEffect(()=>{
      
      gsap.fromTo(blurr1.current,{
        height:'45rem'
      },{
        height:0,

        duration:10,
        scrollTrigger:{
          trigger:'blurr1',
          start:'75% 29%',
 
          toggleActions:'restart pause reverse pause',
          scrub:true,
          pin:contain1.current
        }
      })
  })
  let style = {
    height:'5rem',
    width:'10rem',
    margin:'1rem',
    borderRadius:'25%/50%',
    fontSize:'1.5rem',
    backgroundColor:'rgb(20,95,95)',
    color:'white'
  }

  return (
    <>
      <div className={styles.panel1}><Navbar />
      <div className={styles.content} ref={text} >
        <Typography variant='h1'className={styles.typo}>
          Welcome to the world of imagination
          </Typography>
        <div style={{margin:'1rem'}}><Button variant='contained' style={style}>Sign In</Button><Button variant='contained' style={style}>Join</Button></div>
      </div>
      </div>
      <div className={styles.panel2}
      ref={contain}
      >
        
        <div className={styles.blur}
        ref={blurr}
        >

        </div>
       <div className={styles.img}>

       </div>
      
       </div>
       <div className={styles.panel3}>
        
       </div>
       <div className={styles.panel4}
       ref={contain1}
       >
        <div className={styles.blur2}
        ref={blurr1}
        ></div>
        <div className={styles.img2}></div>
       </div>
       <div className={styles.panel5}></div>
        <Footer />
    </>
  )
}
