import React, { useState, useContext, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Linke from '@material-ui/core/Link';
import { Link, Redirect } from "react-router-dom";
import "./home.css";

// import Contacts from "../contacts/Contacts";
// import ContactForm from "../contacts/ContactForm";
// import ContactFilter from "../contacts/ContactFilter";

import AuthContext from "../../context/auth/authContext";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Linke color="inherit" href="https://cepdnaclk.github.io/e16-3yp-smart-meeting-automaton/">
         Smart Meeting Automaton
      </Linke>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  spacefordiv :{
     padding: ' 30px 0',
  },
  cardheading:{
    height: 65,
  },
  spacefot:{
     height: 35,
  }
}));

const cards = [
  {heading :"Shedule Your Meeting on the go",
  meadia:"You can use our WEB Protral and Our Mobile App",
image:"https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}, 
  {heading :"Zero room configuration ",
 meadia:"Room is automatically configuer to predetermine states.",
image:"https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}, 
  {heading :"Manage Your Meetings",meadia:"Manage meeting times , AC , Projectors , Bulbs with our mobile App",image:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}
];

// import Rooms from "../main/Rooms";
// import Configure from "../main/Configure";
// import AddRoom from "./AddRoom";
// import AddUser from "../main/AddUser";


export const Home = () => {
  const classes = useStyles();

  const [load, setload] = useState(true);
  const authContext = useContext(AuthContext);
  const { loading } = authContext;

  useEffect(() => {
    if (!loading) {
    }
  }, [loading]);

  
  return (
 <React.Fragment>
      <CssBaseline />
   
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Smart Meeting Automaton
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Your Future Meeting Room Automator
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                  
         <li  style={{"listStyleType":"none","color":"white"}}>
        <Link  to="/login">
         <i className="fas fa-sign-out-alt"></i> <span style={{"listStyleType":"none","color":"white"}}      >Login</span>
        </Link>

      </li>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                  <Linke color="inherit" href="https://cepdnaclk.github.io/e16-3yp-smart-meeting-automaton/">
        Documentation
      </Linke>{' '}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
           <Typography variant="h4" align="center" color="primary" paragraph>
             KEY FEATURES
            </Typography>
            <div ></div> 
          {/* End hero unit */}
          <Grid container className ={classes.spacefordiv} spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className = {classes.cardheading} gutterBottom variant="h5" component="h2" >
                     {card.heading}
                    </Typography>
                    <Typography align="center">
                    {card.meadia}
                    </Typography>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         Smart Meeting Automaton
        </Typography>
        <Typography className = {classes.spacefot} variant="subtitle1" align="center" color="textSecondary" component="p">
        Your Future Meeting Room Automator
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
export default Home;
