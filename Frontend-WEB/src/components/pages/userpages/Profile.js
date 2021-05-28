import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import uimage from "./userimag/thin-line-user-icon-on-260nw-519039097.jpg"


import AuthContext from "../../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  root: {
    
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    padding: '5% 8%',
     marginTop: theme.spacing(2),

  },
  card: {
    
    width: '60%',
    
    marginTop:"15%",
    margin : "  0 20%",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '66.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const card = {heading :"Shedule Your Meeting on the go",
  meadia:"You can use our WEB Protral and Our Mobile App",
image:`${uimage}`};
  
 
export const Profile=()=> {
  const authContext = useContext(AuthContext);
  const {  user, isadmin } = authContext;
  const classes = useStyles();

  return (
    <Container maxWidth="sm">

 <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                 
                 
                </Card>


    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USERID : " secondary={user.userId} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="NAME : " secondary={user.name} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="EMAIL" secondary={user.email} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PHONE" secondary={user.phone} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DATE OF BIRTH" secondary="01 Aug 1999" />
      </ListItem>
    </List>
  </Container>
  
  );
}

export default Profile;