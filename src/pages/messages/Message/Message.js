import React from "react";
import stylesMessage from "./style"
import ListItem from '@mui/material/ListItem'

const Message = ({i, id, isSender}) => {

    const message = React.useRef(null);
    const messageInfo = React.useRef(null);

    // React.useEffect(() => {
    //     if(message.current.offsetWidth < 190){
    //         const flexDirectionColumn = {flexDirection: "column", marginBottom: 8};
    //         messageInfo.current.style = {...stylesMessage.messageInfo, ...flexDirectionColumn, ...isSender(i) ? stylesMessage.alignItemsEnd: stylesMessage.alignItemsStart}
    //     }
    // }, [message.current])

    return(
        <ListItem
          style={{...stylesMessage.messageCont, ...isSender(i) ? stylesMessage.myMessageCont : stylesMessage.anotherMessageCont}}
          className="userPlusMessage"
        >

          <div className="user">
            <img
              style={stylesMessage.avatar}
              src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
              alt="" />
          </div>

          <div key={id} style={{...stylesMessage.messageCont2, ...isSender(i) ? stylesMessage.alignItemsEnd: stylesMessage.alignItemsStart}}>

            {/* {console.log(i)} */}

            <div ref={messageInfo} style={{...stylesMessage.messageInfo}}>
              <div style={stylesMessage.nameAuthor}>{isSender(i) ? "Вы" : i.sender.firstName + " " + i.sender.lastName}</div>
              <div style={stylesMessage.timeMessage}>{
                new Date().getFullYear() === new Date(i.createdAt).getFullYear() &&
                new Date().getMonth() === new Date(i.createdAt).getMonth() &&
                new Date().getDate() === new Date(i.createdAt).getDate() ?
                new Date(i.createdAt).toISOString().split('T')[1].substring(0, 5) : 
                new Date(i.createdAt).toISOString().split('T')[0]
            }</div>
            </div>

            <div ref={message} style={{...stylesMessage.message, ...isSender(i) ? stylesMessage.myMessage : stylesMessage.anotherMessage}}>
              {i.content}
            </div>

            



            {/* {i.content}
            <span style={{ fontSize: '12px', color: 'gray' }}>06.00 AM</span> */}
          </div>
        </ListItem>
    );
}

export {Message};