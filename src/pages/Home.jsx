import React from "react";
import Heading from "../components/Heading";
// import Graphs from "../components/graph/Graphs";
import FetchingDatas  from "../datas/FetchingDatas";
import '../styles/pages/home.css';


const Home = () =>{
    const data = FetchingDatas();

    if (!data) {
        return <pre>Loading...</pre>;
      }
      
      let userGeneralInfos;
      console.log(data.userGeneral.name)
      userGeneralInfos = data.userGeneral

return(
    <div className="home-body">
        <div className="home-content">
            <div className="header">
                {/* <Logo/> */}
            </div>
                <Heading {...userGeneralInfos} />
                {/* <Graphs truc={userGeneralInfos}/> */}
        </div>
    </div>
)
}

export default Home;
