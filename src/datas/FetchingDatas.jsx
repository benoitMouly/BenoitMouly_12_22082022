import { useState, useEffect } from "react";
import AverageSessions from "../core/AverageSessions";
import User from "../core/User";
import Activity from "../core/UserActivity";
import Performance from "../core/UserPerformance";
/**
 * Fetch our datas, using class and life cycle
 * @component react
 * @returns {Object} contains our datas
 */

const FetchingDatas = () => {
    
    const [data, setData] = useState();
    useEffect(() => {
        const idArray = ['12', '18'] // Permet de choisir au hasard un des deux users
        const  idUser  = idArray[Math.floor(Math.random() * idArray.length)];
        Promise.all([
            fetch("http://localhost:3000/user/" + idUser).then(value => value.json()),
            fetch("http://localhost:3000/user/" + idUser +"/activity").then(value => value.json()),
            fetch("http://localhost:3000/user/" + idUser + "/average-sessions").then(value => value.json()),
            fetch("http://localhost:3000/user/" + idUser + "/performance").then(value => value.json()),
          ]).then((res) => {
            console.log(res[0])
              const user = new User(res[0].data)
              
              let activity;
              let averageSessions;
              let performance;
                if(res[1][0]){
                    activity = new Activity(res[1][0].data)
                    averageSessions = new AverageSessions(res[2][0].data)
                    performance = new Performance(res[3][0])
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