import React, { useContext } from "react"
import { List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { LancesContext } from '../providers/LancesProvider'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function Contacts() {

    const classes = useStyles()

    const { contacts, selectedChat, setSelectedChat } = useContext(LancesContext)

    return <List>

        {contacts.map((contact)=> (
            <>    
                <ListItem button selected = {selectedChat === contact.username} onClick={()=>{
                    setSelectedChat(contact.username)
                }}>
                    <ListItemAvatar >
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={contact.name}  />
                    <span  style={{width: 12, height: 12, backgroundColor: contact.online ? "green" :"red" , borderRadius: 6}} />
                </ListItem>
                <Divider />
            </>
        )) }
    </List>
}