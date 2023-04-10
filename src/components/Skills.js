import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Skills(props) {
    let skill  = props.skill
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',paddingRight:2 }}>
      <ListItem alignItems="flex-start">

        <ListItemAvatar sx={ {width:30, height:30, backgroundSize:"cover"}}>
          <Avatar alt={skill.name}  src={process.env.PUBLIC_URL + `/images/${skill.name}.png`} />
        </ListItemAvatar>

        <ListItemText 
          primary={skill.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Ali Connors */}
              </Typography>
             {/*  {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
   
     
    </List>
  );
}