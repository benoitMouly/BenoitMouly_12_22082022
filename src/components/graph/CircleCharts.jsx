import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import './graphcss/CircleChart.css';
import propTypes from 'prop-types';

/**
 * CircleChart / PieChart of user's score / todayScore
 * @component react
 * @param {Object} datas props
 *  @property {Number} value  quantity
 * @property {String} name label used for the chart
 */

const CircleCharts = (datas) => {
    let datasAll = datas.generalInfoDatas.userGeneral.totalScore
    // Check corrupted data (score / todayScore are different between profiles)
    if(!datasAll){
      datasAll = datas.generalInfoDatas.userGeneral.todayScore
    }

  const data = [
    { name: 'score', value: datasAll },
    { name: 'total', value: 1 - datasAll }
  ];

  return (
    <div className='circlechart-main'>
      <div className='circlechart-header'>Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={100}>
          <Pie data={data} startAngle={90} endAngle={450} innerRadius={90} outerRadius={100} cornerRadius={10}
            dataKey="value"
          >
            <Cell stroke={'#E60000'} fill={'#E60000'}/>
            <Cell stroke={'transparent'} fill={'transparent'} />
          </Pie>
          <Pie fill={'#FFFFFF'}  dataKey="value" />
          <Legend content={InternLegend} verticalAlign='middle' align='center' />
        </PieChart>
      </ResponsiveContainer>
    </div >
  );
}

/**
 * InterLegend custom component 
 * @param {Array} payload array who got informations about the score
 * @returns {JSX}
 */
const InternLegend = (payload) => {
    return (
      <div className='circlechart-legend'>
        <span className='circlechart-score'>{payload.payload[0].payload.percent * 100}%</span>
        <p className='circlechart-verbatim'>de votre <br/>objectif</p>
      </div>
    )
};

/* propTypes */  

CircleCharts.propTypes = {
  datas: propTypes.array
}
InternLegend.propTypes = {
  payload: propTypes.array
}

export default CircleCharts;