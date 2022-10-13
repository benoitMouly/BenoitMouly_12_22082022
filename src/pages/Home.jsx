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
    * On appelle notre function qui Fetch nos datas
    */

    const data = FetchingDatas();
    // console.log(data)

    if (!data) {
        return <pre>Loading...</pre>;
      }
      
      let userGeneralInfos;
      let userActivityInfos;
      let userAverageSessions;
      let userPerformance;

      /**
       * On push les différentes données récoltées pour les passer en props plus tard
       */

      userGeneralInfos = data.userGeneral
    //   console.log(data)
    //   console.log(...userGeneralInfos)
      userActivityInfos = data.userActivity
      userAverageSessions = data.userAverageSessions;
      userPerformance = data.userPerformance

return(
    <div className="home-body">
        <BannerTop/>
        <BannerLeft/>
        <main>
            <Heading generalInfos={{...userGeneralInfos}} generalActivity={{...userActivityInfos}} generalAverageSessions={{...userAverageSessions}} generalPerformance={{...userPerformance}}/>
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
