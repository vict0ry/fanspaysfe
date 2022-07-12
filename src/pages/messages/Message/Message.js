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
              src="data:image/png;base64,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"
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