import React from "react";

import FetchingDatas  from "../datas/FetchingDatas";
import Heading from "../components/Heading";
import BannerTop from "../components/BannerTop";
import BannerLeft from "../components/BannerLeft";
import BannerRight from "../components/BannerRight";

import BarCharts from "../components/graph/BarCharts";
import SpiderCharts from "../components/graph/SpiderCharts";
import OndularCharts from "../components/graph/OndularCharts";
import CircleCharts from "../components/graph/CircleCharts";

import '../styles/pages/home.css';

/**
 * Home who represents the main page who contains every components 
 * @component react
 * @returns {JsxElement} 
 */

const Home = () =>{
    /*
    * We call our functions who's fetching our datas
    */

    const data = FetchingDatas();
    // console.log(data)

    if (!data) {
        return <pre>Loading...</pre>;
      }
      
      let userGeneralInfos;

      /*
       * We push our differents datas to pass them later on into props
       */

      userGeneralInfos = data.userGeneral
    //   console.log(data)

return(
    <div className="home-body">
        <BannerTop/>
        <BannerLeft/>
        <main>
            <Heading generalInfos={userGeneralInfos}/>
            <div className="stats-main">
                <div className="stats1">
                    <BarCharts generalInfoDatas ={data}/>
                    <div className="stats2">
                        <OndularCharts generalInfoDatas={data}/>
                        <SpiderCharts generalInfoDatas={data}/>
                        <CircleCharts generalInfoDatas={data} />
                    </div>
                </div>
                <div className="stats-right">
                    <BannerRight generalInfoDatas={data}/>
                </div>
            </div>
        </main>
    </div>
)
}

export default Home;
