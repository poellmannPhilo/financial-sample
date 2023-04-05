import Image from "next/image";
import styles from "../styles/Navigation.module.css";

export const CompanyLogo = () => {
  return (
    <div className={styles.companyLogoContainer}>
      <div id={styles.companyLogo}>
        <Image
          src={"/favicon.ico"}
          alt="Company Logo"
          width={60}
          height={60}
        ></Image>
      </div>
    </div>
  );
};
