import styles from "../styles/Navigation.module.css";
import {
  BiAbacus,
  BiBot,
  BiCreditCard,
  BiEuro,
  BiLineChart,
  BiShieldX,
  BiNetworkChart,
} from "react-icons/bi";

export const SidebarIcons = () => {
  return (
    <div className="vertical-array center-align">
      <BiShieldX size={40} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiLineChart size={40} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiEuro size={40} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiCreditCard
        size={40}
        color={"#eeeeee"}
        className={styles.sidebarIcon}
      />
      <BiBot size={40} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiAbacus size={40} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiNetworkChart
        size={40}
        color={"#eeeeee"}
        className={styles.sidebarIcon}
      />
    </div>
  );
};
