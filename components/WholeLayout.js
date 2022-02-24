import React, {useState, useEffect} from "react";
import ThreeWrapper from "@/components/ThreeWrapper";
import Loading from "@/components/Loading";
import Navigation from "./Navigation";
import styles from "@/styles/Home.module.scss";
import FontFaceObserver from "fontfaceobserver"

function fontLoadingProcedure() {

}

const WholeLayout = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const vulfSansRegular = new FontFaceObserver("Vulf Sans Regular");
    const vulfSansMedium = new FontFaceObserver("Vulf Sans Medium");
    const vulfSansLight = new FontFaceObserver("Vulf Sans Light");
    const vulfSansBold = new FontFaceObserver("Vulf Sans Bold");
    const vulfSansBlack = new FontFaceObserver("Vulf Sans Black");

    Promise.all([
      vulfSansRegular.load(),
      vulfSansMedium.load(),
      vulfSansBlack.load(),
      vulfSansLight.load(),
      vulfSansBold.load() 
    ]).then(() => {
      setIsLoading(false)
    })

  }, [isLoading])

  return isLoading ? <Loading/> : (
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