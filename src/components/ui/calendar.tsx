/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#16339C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="15min"
	  calLink="san-tech-domain-plr1kx/15min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view","theme":"light"}}
    
	  
	/>;
  };
  