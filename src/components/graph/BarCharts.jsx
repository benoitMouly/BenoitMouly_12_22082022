import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './graphcss/Barcharts.css';
import propTypes from 'prop-types';

/**
 * Barchart who represents stats from user, including kcal and kg
 * @component react
 * @param {Object} datas props
 * @property {String} day date
 * @property {Number} kilogram  weight
 * @property {Number} calories  calories
 * @returns {JsxElement} 
 */

const BarCharts = (datas) => {
    const data = datas.generalInfoDatas.userActivity.sessions;

  return (
    <div className='barchart-main'>
      <div className='barchart-legend' >
        <h2 >Activité quotidienne</h2>
        <ul>
          <li >Poids (kg)</li>
          <li >Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data} width={500} height={300} barGap={3} >
          <CartesianGrid strokeDasharray='10' vertical={false} />
          <XAxis dataKey='day' stroke='#DEDEDE' strokeWidth={2} tick={{ fill: '#9B9EAC' }} tickLine={false} tickFormatter={(day) => day.slice(-1)} />
          <YAxis yAxisId='kilogram' orientation='right' tickLine={false} axisLine={false} tickCount={4} />
          <YAxis yAxisId='calories' hide orientation='right' />
          <Tooltip content={<CustomTooltip />} isAnimationActive={true}  />
          <Bar yAxisId='kilogram' dataKey='kilogram' fill='#E60000' radius={[5, 5, 0, 0]} barSize={5}/>
          <Bar yAxisId='calories' dataKey='calories' fill='#282D30' radius={[5, 5, 0, 0]}barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * Custom Tooltip 
 * @param {Boolean} active state true/false
 * @param {Array} payload [0] (Number) Represent time session
 * @returns {jsxElement|null} jsxElement if active, either null
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='barchart-tooltip'>
        <div>{`${payload[0].value}`}kg</div><br/>
        <div>{`${payload[1].value}`}kCal</div>
    </div>
    );
  }
  return null;
};

/* propTypes */ 

BarCharts.propTypes = {
  datas: propTypes.array
}
CustomTooltip.propTypes = {
  payload: propTypes.array,
  active : propTypes.bool
}
export default BarCharts;