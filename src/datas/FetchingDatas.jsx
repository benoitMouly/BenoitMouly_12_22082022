import { useState, useEffect } from "react";
import AverageSessions from "../core/AverageSessions";
import User from "../core/User";
import Activity from "../core/UserActivity";
import Performance from "../core/UserPerformance";

const FetchingDatas = () => {
    
    const [data, setData] = useState(null);


    useEffect(() => {
        Promise.all([
            fetch("http://localhost:3000/user/12").then(value => value.json()),
            fetch("http://localhost:3000/user/12/activity").then(value => value.json()),
            fetch("http://localhost:3000/user/12/average-sessions").then(value => value.json()),
            fetch("http://localhost:3000/user/12/performance").then(value => value.json()),
          ]).then((res) => {

              const user = new User(res[0].data)
              let activity;
              let averageSessions;
              let performance;
                if(res[1][0]){
                    activity = new Activity(res[1][0].data)
                    averageSessions = new AverageSessions(res[2][0].data)
                    performance = new Performance(res[3][0].data)
                }else{
                    activity = new Activity(res[1].data) 
                    averageSessions = new AverageSessions(res[2].data)
                    performance = new Performance(res[3].data)
                }
             
          setData({
              userGeneral: user,
              userActivity: activity,
              userAverageSessions: averageSessions,
              userPerformance: performance
          })
          }).catch((err) => {
              console.log(err);
          });
      }, []);

  
    return data;
};

export default FetchingDatas;