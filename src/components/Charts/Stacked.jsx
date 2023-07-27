import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,StackingColumnSeries,Tooltip } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../contexts/ContextProvider'
//data used 
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy'
const Stacked = ({width,height}) => {
  const {currentColor,currentMode} = useStateContext()

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      legendSettings={{background:"white"}}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={!currentMode}
    >
      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked