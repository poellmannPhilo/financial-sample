import { Avatar } from "@/components/Avatar";
import { NotificationIcon } from "./NotificationIcon";
import styles from "../styles/Social.module.css";
import { BiCaretRightSquare } from "react-icons/bi";

export const SocialHeader = () => {
  return (
    <div className={styles.socialHeaderContainer}>
      <div className="horizontal-array center-align">
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female"></Avatar>
        <NotificationIcon></NotificationIcon>
      </div>
      <div className="horizontal-array center-align">
        <BiCaretRightSquare size={26}></BiCaretRightSquare>
      </div>
    </div>
  );
};
