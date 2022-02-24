import ThreeWrapper from "@/components/ThreeWrapper";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";

const WholeLayout = ({children}) => {
 return (
   <div>
     <ThreeWrapper>
     <main className={styles.containerMain}>
          <Navigation />
          {children}
      </main>
     </ThreeWrapper>
   </div>
 ) 
}

export default WholeLayout;