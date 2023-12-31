import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
      <div className="sidebarChat__info">
        <h2>Random person</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  );
}
export default SidebarChat;
