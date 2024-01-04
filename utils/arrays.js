import {BsImageFill,BsMusicNoteBeamed,BsFillFileCodeFill, BsMusicNote} from 'react-icons/bs'
import {MdQuiz} from 'react-icons/md'
import {FaFilePowerpoint} from 'react-icons/fa6'
import { FaHome } from "react-icons/fa";
import {AiFillGithub,AiFillLinkedin,AiTwotoneMail} from 'react-icons/ai'

import { FaCode } from "react-icons/fa";


export const tools = [
    {id:-1,title:'Dashboard',icon:<FaHome/>,link:'/dashboard',desc:" ",color:'to-orange-600'},
    {id:1,title:'Code Generator',icon:<FaCode/>,link:'/code',desc:"Create AI generated solutions",color:'to-pink-700'},
    {id:2,title:'image generator',icon:<BsImageFill/>,link:'/image',desc:"Create awesome AI generated images",color:'to-purple-600'},
    {id:4,title:'quiz generator',icon:<MdQuiz/>,link:'/quiz',desc:"test your knowledge AI generated quizz",color:'to-yellow-500'},

  
    
    // {id:6,title:'code generator',icon:<BsFillFileCodeFill/>,link:'/code'},
  ];

  export const links=[
    {id:1,title:'About',path:'#about'},
    {id:2,title:'Pricing',path:'#pricing'},
    {id:3,title:'Sign In',path:'/login'}
  ];


  export const icons=[
    {id:1,title:<AiFillGithub/>,path:'https://www.github.com/watwatos'},
    {id:2,title:<AiFillLinkedin/>,path:'https://www.linkedin.com/in/ali-chamas-b4a627276/'},
    {id:3,title:<AiTwotoneMail/>,path:'mailTo:alichamas.22@hotmail.com'}
  ];