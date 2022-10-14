import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './graphcss/OndularCharts.css';
import propTypes from 'prop-types';


/**
 * OndularChart / Linechart of session's duration per week
 * @param {Object} datas props
 * @param {String} data.day Day of the week
 * @param {String} data.sessionLength Duration of the session
 * @returns {JsxElement} 
 */

const OndularCharts = (datas) => {
const datasAll = datas.generalInfoDatas.userAverageSessions.average

// format ticks name, tickFormatter takes a function
const formatXAxis = (value) => {
  if(value === 1) return "L"
  if(value === 2) return "M"
  if(value === 3) return "M"
  if(value === 4) return "J"
  if(value === 5) return "V"
  if(value === 6) return "S"
  if(value === 7) return "D"
  return value
}

  return (
    <div className='ondularchart-main'>
      <div className='ondularchart-header'>
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width='100%' height='100%' >
        <LineChart data={datasAll} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <XAxis dataKey='day' axisLine={false} tickFormatter={formatXAxis} tickMargin={0}
            tickLine={false}
            stroke='rgba(255, 255, 255, 0.5)'
            padding={{ left: 10, right: 10 }}
            fontSize={12}
            fontWeight={600}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+40']} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 40 }} />
          <Line type='natural' dataKey='sessionLength' stroke='rgba(255, 255, 255, 0.6)' strokeWidth={2.5} activeDot={{ background: '#FFFFFF', stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 10, r: 4 }} dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
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
      <div className='ondularchart-tooltip'>
        <div>{`${payload[0].value} `}min</div>
      </div>
    );
  }
  return null;
};

/* propTypes */  

OndularCharts.propTypes = {
  datas: propTypes.array
}
CustomTooltip.propTypes = {
  payload: propTypes.array,
  active : propTypes.bool
}
export default OndularCharts;