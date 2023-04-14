import React, { useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EmailIcon from '@mui/icons-material/Email';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SchoolIcon from '@mui/icons-material/School';



// import { mainListItems,secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import './style.css'
import Banner from './Banner';

import { Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaShoppingCart } from "react-icons/fa";
import Projects from './Projects';
//IMG
import MyTinerary from '../assets/myTinerary.jpg'
import Seoma from '../assets/seoma.jpg'
import { Avatar, ListItemIcon, ListItemText } from '@mui/material';
import { display } from '@mui/system';
import Skills from './Skills';
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';

const apps = [

    {
        name: 'XKal Fitness',
        description: 'Xkal fitness web site, landing page, institutional page, payment platform, registration, login and account user',
        date: "3/2022",
        funcionality: "This app is development using Javascript as language and using React JS and Next Js to create frontend. Platform Page using stripe and conecting with firabase",
        link: 'https://xkalfitness-dev.firebaseapp.com/',
        technology: ["Node Js", "React Js", "Next Js", "Stripe", "Firabase", "MUI"]

    },
    {
        name: 'Seoma',
        description: 'Seoma is a e-commerce of electronics products such as computers, laptops and monitors also you can buy and pre-desing your own apps mobile or web site and send some query to seoma admin',
        date: "4/2022",
        funcionality: "This app is development using Javascript as language and using React JS to create frontend and Node js and Express Js to sever develoment.Seoma has account",
        //  admin",
        //  and account user where both can manage inquiries",
        link: 'https://elenaperd24.github.io/seoma/',
        technology: ["Node Js", "React Js", "MUI", "Mongodb"]

    },

    {
        name: 'My Tinerary',
        description: 'My tineray is a intineraries app where you can find many place around the world where you can go, you can check price, time and to see opinion from others people',
        date: "10/2021",
        funcionality: "This app is development using Javascript as language and using React JS to create frontend and Node js and Express Js to sever develoment.",
        link: 'https://elenaperd24.github.io/_mytineraryfrontend/',
        technology: [
            "Node Js", "React Js", "MUI", "Mongodb"
        ]

    },

    {
        name: 'Bruce Petshop',
        description: '',
        date: "5/2021",
        funcionality: "This app is development using Javascript as language and using React JS to create frontend and Node js and Express Js to sever develoment.",
        link: 'https://marianteran.github.io/petshop/',
        technology: ["Html"]

    },

]



const skills = [

    {
        name: "Node Js"
    },
    {
        name: "React Js"
    },
    {
        name: "Next Js"
    },
    {
        name: "MUI"
    },

    {
        name: "Stripe"
    },
    {
        name: "Sql"
    },
    {

        name: "Firabase"
    },
    {
        name: "Websocket"
    },
    {
        name: "Html",

    },

]

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {



    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };



    useEffect(() => {



    }, []);


    const addAddResizeEvent = (event) => {
        if (event.target.outerWidt > 700) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex', backgroundColor: "#eabae6" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            backgroundColor: "black"
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            <Text />

                        </Typography>
                        <IconButton color="inherit">

                            <EmailIcon />

                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                            backgroundColor: "black",

                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon color="inherit" />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" >

                        <Divider sx={{ my: 1, }} />
                        <React.Fragment>
                            <ListItemButton href="mailto: elena24.perdomo@gmail.com">
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Email" />
                            </ListItemButton>
                            <ListItemButton target={"blank"} href='https://drive.google.com/file/d/1K-pa0XZn1JJL6-WHsMZYAEfka_Dn3hyb/view?usp=sharing'>
                                <ListItemIcon>
                                    <DownloadIcon />
                                </ListItemIcon>
                                <ListItemText primary="Resume CV" />
                            </ListItemButton>
                            <ListItemButton target={"blank"} href='https://api.whatsapp.com/send?phone=61468700564'>
                                <ListItemIcon>
                                    <WhatsAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Whatsapp" />
                            </ListItemButton>

                            <ListItemButton href="#contactMe">
                                <ListItemIcon>
                                    <CallIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contact me" />
                            </ListItemButton>



                        </React.Fragment>
                        {/*   {secondaryListItems} */}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />

                    {/* HEADER */}
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Grid container spacing={2}>

                            <Grid item xs={12} md={4} lg={3}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    backgroundColor: "white",
                                    height: 350,
                                    mt: 2
                                }} >

                                {/* IMG PROFILE */}

                                <Avatar sx={{ width: 200, height: 200 }} alt="avatar" src={process.env.PUBLIC_URL + `/images/myAvatar.png`} />


                                {/* NAME PROFILE */}
                                <Grid item sx={{ display: "flex", justifyContent: "center" }} >
                                    <div >
                                        <h3 >Elena Perdomo <span className='wave'> 🌼</span></h3>
                                        {/*  <p>full stack web developer</p> */}
                                    </div>
                                    {/*  <Orders /> */}
                                </Grid>

                            </Grid>

                            {/* BANNER */}
                            <Grid item xs={12} md={8} lg={9} sx={{ textAlign: "right" }}>

                                <Grid className='homepagebackground'
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: "row",
                                        height: 240,
                                        justifyContent: "end",
                                        alignItems: "end"
                                    }}
                                >
                                    <div sx={{}} >

                                        <button onClick={() => {
                                            window.open("https://github.com/Elenaperd24");
                                        }}
                                            className='socailmediabtn'><AiFillGithub className='icon' /></button>
                                        <button onClick={() => {
                                            window.open("https://www.linkedin.com/in/elena-perdomo-960469127/");
                                        }}
                                            className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
                                        <button onClick={() => {
                                            window.open("https://twitter.com/ElenaPerdomoo/");
                                        }}
                                            className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
                                        <button onClick={() => {
                                            window.open("https://www.instagram.com/elenaperdomoo/");
                                        }}
                                            className='socailmediabtn'><AiFillInstagram className='icon' /></button>
                                    </div>



                                </Grid>


                                <Grid item xs={12} md={12}>


                                    <Paper
                                        sx={{ mt: 1, p: 2, textAlign: "left" }}
                                    >

                                        <Typography variant="body1" >
                                            I’m a software developer with a passion for new
                                            technologies. I have experience as a full stack
                                            developer using JavaScript as a programming
                                            language, and React as library for frontend, as
                                            well the runtime environment Node.js for
                                            server design.
                                        </Typography>

                                    </Paper>
                                </Grid>



                            </Grid>


                        </Grid>
                    </Container>


                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={2}>

                            {/* SKILLS */}

                            <Grid item xs={12} md={4} lg={3} sx={{ backgroundColor: "white", display: "flex", justifyContent: "", flexDirection: "column" }}>
                                <Typography sx={{ display: "flex", justifyContent: "center" }} variant="h6" gutterBottom >
                                    Technologies
                                </Typography>
                                {
                                    skills.map(skill => {
                                        return (
                                            <Skills skill={skill} />
                                        )
                                    })
                                }

                            </Grid>

                            {/* MY PROJECTS*/}
                            <Grid item xs={12} md={8} lg={9} /* sx={{ display: "flex", justifyContent: "center" }} */>
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", justifyContent: "center" }}>
                                    My Projects
                                </Typography>
                                <Grid container spacing={1}>
                                    {apps.map(item => {
                                        return (
                                            <Grid item xs={12} md={6} lg={6} >
                                                <Projects app={item} />
                                            </Grid>
                                        )
                                    })}

                                </Grid>

                            </Grid>




                        </Grid>

                    </Container>


                    {/* Contact me */}

                    <Container id="contactMe" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid Container spacing={2} sx={{ backgroundColor: "#ffceda", height: 2000, }}>
                            <Grid className='cv' item xs={12} md={12} lg={12}
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: "row",
                                    height:2000,
                                }}>



                            </Grid>


                        </Grid>
                    </Container>




                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}

