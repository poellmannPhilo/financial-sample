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
      <BiShieldX size={30} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiLineChart size={30} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiEuro size={30} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiCreditCard
        size={30}
        color={"#eeeeee"}
        className={styles.sidebarIcon}
      />
      <BiBot size={30} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiAbacus size={30} color={"#eeeeee"} className={styles.sidebarIcon} />
      <BiNetworkChart
        size={30}
        color={"#eeeeee"}
        className={styles.sidebarIcon}
      />
    </div>
  );
};
