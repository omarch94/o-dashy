import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,LineSeries,Tooltip} from '@syncfusion/ej2-react-charts'
import {lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';
const LineCharts = () => {
  const {currentMode}=useStateContext();
  return (
    <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0 }}}
    tooltip={{enable:true}}
    background={currentMode==='Dark'?'#33373e':'#fff'}
    >
          <Inject services={[LineSeries,DateTime,Legend]}/>
          <SeriesCollectionDirective>
            {lineCustomSeries.map((series,index)=>
            <SeriesDirective key={index} {...series}/>
            )}
            </SeriesCollectionDirective>
     </ChartComponent>

)
  }
export default LineCharts