import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import './graphcss/SpiderCharts.css';
import propTypes from 'prop-types';

/**
 * radarchart who represents stats from user, like speed, strength ...
 * @component react
 * @param {Object} datas props
 * @property {Array} datasAll  array of object
 * @return {JsxElement} 
 */

const SpiderCharts = (datas) => {
const datasAll = datas.generalInfoDatas.userPerformance.datas

// format ticks name, tickFormatter takes a function
   const formatYAxis = (value) => {
    if(value === 1) return "Cardio"
    if(value === 2) return "Energie"
    if(value === 3) return "Endurance"
    if(value === 4) return "Force"
    if(value === 5) return "Vitesse"
    if(value === 6) return "Intensité"
    return value
  }

  return (
    <div className="radarchart-main">
      <ResponsiveContainer width="100%" height="100%" className="responsiveContainer">
        <RadarChart startAngle={90} endAngle={-270} outerRadius={70} data={datasAll} strokeWidth={1.5} className="radarStart">
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis tickCount={5} tick={false} axisLine={false} />
          <PolarAngleAxis  dataKey='kind' tick={{ fontSize: '10px', fill: '#FFFFFF' }} tickFormatter={formatYAxis}/>
          <Radar  dataKey='value' stroke="false" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}


/* propTypes */ 

SpiderCharts.propTypes = {
  datas: propTypes.array
}


export default SpiderCharts;