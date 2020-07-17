//** @jsx jsx */
import React from "react";
import { Icon } from "@makerdao/dai-ui-icons";
import { Image, jsx } from "theme-ui";
import { Link } from "@modules/navigation";

//More of a Utility
//Specifically used for Author links but I imagine it will have it's own use else where.

//NOTE(Rejon): This is crunchy. I choose not to do an elegant solution cause it really isn't necessary
//			   unless the team asks for it to be robust.
const getLinkIcon = (url, key) => {
  if (url.includes("github")) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="github" size={"23px"} sx={{ color: "text" }} />
      </Link>
    );
  } else if (url.includes("twitter")) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="twitter" size={"23px"} sx={{ color: "text" }} />
      </Link>
    );
  } else if (url.includes("medium")) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="medium" size={"23px"} sx={{ color: "text" }} />
      </Link>
    );
  } else if (url.includes("youtube")) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="youtube" size={"23px"} sx={{ color: "text" }} />
      </Link>
    )
  } else if (url.includes("wechat")) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="wechat" size={"23px"} sx={{ color: "text" }} />
      </Link>
    )
  } else if (url.includes('t.me')) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="telegram" size={"23px"} sx={{ color: "text" }} />
      </Link>
    )
  } else if (url.includes('reddit')) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="reddit" size={"23px"} sx={{ color: "text" }} />
      </Link>
    )
  } else if (url.includes('chat.')) {
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="rocketchat" size={"23px"} sx={{ color: "text" }} />
      </Link>
    )
  } else { 
    return (
      <Link hideExternalIcon to={url} key={key} sx={{ mr: "6px" }}>
        <Icon name="open_in_new_tab" size={"23px"} />
      </Link>
    );          
  }
};

export default getLinkIcon;
