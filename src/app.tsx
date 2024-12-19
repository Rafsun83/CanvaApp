import {Rows } from "@canva/app-ui-kit";
import * as styles from "styles/components.css";
import AppTabs from "./Components/Tabs/Tabs";
export const App = () => {
  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
       <AppTabs/> 
      </Rows>
    </div>
  );
};
