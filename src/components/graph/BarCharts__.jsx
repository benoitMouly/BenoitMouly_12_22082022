// import React, { useState, useCallback, useEffect } from 'react';
import { scaleBand, scaleOrdinal, useEffect} from 'd3';



const BarCharts = (datas) => {
  console.log(datas)
    const width = 960;
    const height = 500;
    const margin = { top: 120, right: 60, bottom: 65, left: 60 };
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    const xAxisLabelOffset = 90;


    const data = datas.generalInfoDatas.userActivity.sessions;
    const dataLegend = ['Poids(kg)', 'Calories brûlées (kCal)'];

    /* CSS */ 
    const titleGraph = {
      fontWeight: "500"
  }
    const redColor = '#e60000';
    const blackColor = '#282D30'

    

    /* FUNCTION ROUNDED BAR */ 
   const topRoundedColumn = (x, y, height, width) => {
      const radius = width / 2;
      const heightBeforeArc = height - radius;
      return (
        `M${x},${y} ` + // Mx,y Move the pen to(x, y)
        `v-${heightBeforeArc} ` + // h<length> Draw a vertical line of length <height>px
        `a ${radius},${radius} 0 0 1 ${radius},-${radius} ` + // arc
        `a ${radius},${radius} 0 0 1 ${radius},${radius} ` +
        `v${heightBeforeArc} ` +
        `z` // close shape
      );
    }

    /*
    * showTooltip(obj, int)
    * Affiche les informations du graph, dans une function map en récupérant son index
    */

 const showTooltip = (d, index)  =>{
  const tooltip = document.querySelectorAll('.group_unical-elt-tooltip')
  const textTooltipKg = document.querySelectorAll('.group_unical-elt-text-kg')
  const textTooltipKcal = document.querySelectorAll('.group_unical-elt-text-kcal')
  const backgroundRectable = document.querySelectorAll('.group_unical-elt-background-grey')
       tooltip[index].style.visibility = 'visible'
       textTooltipKg[index].style.visibility = 'visible'
       textTooltipKcal[index].style.visibility = 'visible'
       backgroundRectable[index].style.fill = '#C4C4C4'
    }

    /*
    * hideTooltip(obj, int)
    * Affiche les informations du graph, dans une function map en récupérant son index
    */
  const hideTooltip = (d, index) => {
      const tooltip = document.querySelectorAll('.group_unical-elt-tooltip')
      const textTooltipKg = document.querySelectorAll('.group_unical-elt-text-kg')
      const textTooltipKcal = document.querySelectorAll('.group_unical-elt-text-kcal')
      const backgroundRectable = document.querySelectorAll('.group_unical-elt-background-grey')
      textTooltipKg[index].style.visibility = 'hidden'
      textTooltipKcal[index].style.visibility = 'hidden'
      tooltip[index].style.visibility = 'hidden'
      backgroundRectable[index].style.fill = 'transparent'
    }

    /* Y SCALE KILOGRAMS */ 
    const yScaleKilograms = scaleBand()
    .domain(data.map((d) => d.kilogram).sort((a, b) => a - b).reverse() )// Domain represents the boundaries within which your data lies
    .range([0, innerHeight])// you need to specify the boundaries within which your original data can be transformed. These boundaries are called the range

    /* X SCALE DAY */
    const xScale = scaleBand()
    .domain(data.map((d, index) => d + (index + 1))) //  on transforme l'index 0 en 1
    .range([1, innerWidth]) // notre range commencera donc a la range 1
    .paddingInner(0.25) // rajoute un padding entre les bandscale

    /* Y SCALE CALORIES */ 
    const yScaleCalories = scaleBand()
    .domain(data.map((d) => d.calories).sort((a, b) => a - b).reverse()  )// Domain represents the boundaries within which your data lies
    .range([0, innerHeight]); // you need to specify the boundaries within which your original data can be transformed. These boundaries are called the range

    return (
        <svg className="barchChart" style={{backgroundColor: '#FBFBFB'}} width={width} height={height}>

      {/* On colle a la marge du Groupe, puis on mets au top en calculant la margin top moins l'offset du xAxisLabelOffset */}
      <text transform={`translate(${margin.left},${margin.top - xAxisLabelOffset})`}  style={titleGraph} className='legend-graph-title'>Activité quotidienne</text>
              <g transform={`translate(${margin.left},${margin.top - xAxisLabelOffset})`}>
      <circle cy ={-5} cx={innerWidth - (xAxisLabelOffset * 3) - 10}  r={3.5} fill={blackColor}></circle>
      <text  x={innerWidth - xAxisLabelOffset * 2} textAnchor="left" className='legend-graph'>Calories brûlées (kCal)</text>
        </g>
      <g transform={`translate(${margin.left},${margin.top - xAxisLabelOffset})`}>
      <circle cy ={-5} cx={innerWidth - xAxisLabelOffset - 100}  r={3.5} fill={redColor}></circle>
      <text  x={innerWidth - xAxisLabelOffset * 3} textAnchor="left" className='legend-graph'>Poids(kg)</text>
        </g>


          <g transform={`translate(${margin.left},${margin.top})`}>
          <line x1="0" y1={innerHeight} x2={innerWidth} y2={innerHeight} stroke="#DEDEDE" strokeWidth={1}/>

          {xScale.domain().map((tickValue, index)  => (
            // tickValue des jours, le horizontal
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`} className="xscale">
           
            <text className='trucPasVisible'
              // style={{ textAnchor: 'middle' }}
              dy="1rem"
              x={xScale.bandwidth() / 2}
              y={innerHeight + 3}
            >
              {index + 1}
            </text>


          </g>
        ))}



        {yScaleKilograms.domain().map((tickValue) => (
          // tickValue des kilograms, le vertical
          <g key={tickValue} transform={`translate(${innerWidth}, 0)`}>
            
          <text 
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={+20}
            dy=".32em"
            y={yScaleKilograms(tickValue)}
            className={tickValue}
            
          >
            {tickValue}
          </text>
          </g>
        ))}


        {yScaleKilograms.domain().map((tickValue) => (
                  // tickValue des kilograms, le vertical gestion des lignes
                  <g key={tickValue} transform={`translate(0,${yScaleKilograms(tickValue)})`}>
                    <line x2={innerWidth}  stroke="#DEDEDE" strokeDasharray="10,10" d="M5 40 l215 0" />
                  </g>
                ))}




        {yScaleCalories.domain().map((tickValue) => (
                    // tickValue des calories, le vertical
                    <g key={tickValue} transform={`translate(${innerWidth}, 0)`}>

                    <text className={tickValue}
                      key={tickValue}
                      style={{ textAnchor: 'end' }}
                      x={+20}
                      dy=".32em"
                      y={yScaleCalories(tickValue)}
                    >
                    </text>
                    </g>
        ))}

        {data.map((d, index) => (
          <g  key={index}>
          <g className="group_unical-elt" onMouseOver={() => showTooltip(d, index)}  onMouseOut={() => hideTooltip(d, index)}>
          {/* <g className="group_unical-elt"> */}
          <rect className="group_unical-elt-background-grey" transform={`translate(${xScale(d + (index +1 ))}, 0)`}  fill="transparent" style={{height: (innerHeight) , width:"100"}} />
          <path transform={`translate(${xScale(d + (index + 1))}, 0)`} fill={blackColor} d={topRoundedColumn(43 , innerHeight  , innerHeight - yScaleKilograms(d.kilogram) , 5)} />
          <path transform={`translate(${xScale(d + (index + 1))}, 0)`} fill={redColor} d={topRoundedColumn(53 , innerHeight  , innerHeight - yScaleCalories(d.calories) , 5)} />
          <g >
            <rect className="group_unical-elt-tooltip" transform={`translate(${xScale(d + (index + 1))}, 0)`} x={80} y={-72} fill="#E60000" style={{position :'absolute', visibility: 'hidden', height: '90', width: '70'}} />
              {/* On met le transform aussi pour le texte pour pouvoir accéder au bandwidth */}
              <text  className="group_unical-elt-text-kg" textAnchor="middle" transform={`translate(${xScale(d + (index + 1))}, 0)`} x={115} y={-35} fill="#fff" style={{position :'absolute', visibility: 'hidden', height: '63', width: '39'}}>{d.kilogram}kg</text>
              <text  className="group_unical-elt-text-kcal" textAnchor="middle" transform={`translate(${xScale(d + (index + 1))}, 0)`} x={115} y={0} fill="#fff" style={{position :'absolute', visibility: 'hidden', height: '63', width: '39'}}>{d.calories}Kcal</text>
            </g>
  
          </g>
          
   
        </g> 
        ) ) }
        </g>
      </svg>
    );
};

export default BarCharts;
