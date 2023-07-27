import React from 'react'

import {GridComponent,ColumnDirective,ColumnsDirective,Page,Inject,Search, Toolbar} from '@syncfusion/ej2-react-grids'
import {employeesData,contextMenuItems,employeesGrid} from '../data/dummy'
import {Header} from '../components'
// import { Search } from '@syncfusion/ej2-react-dropdowns'
const Employees = () => {
  return (
    // "className=' m-2 md:m-10 p-2 md:p-10 mt:10 bg-white rounded-3xl'"
    <div className='m-4 md:m-10 overflow-auto p-5 bg-white rounded-3xl'>
      <Header  category="Page" title="Employees" />
          <GridComponent
          toolbar={['Search']}
          dataSource={employeesData}
          allowPaging
          allowSorting
          width="auto"
          >
            <ColumnsDirective>
                {employeesGrid.map((item,index)=>(<ColumnDirective  key={index} {...item}/>))}
            </ColumnsDirective>
            <Inject services={[Page,Search,Toolbar ]}/>
          </GridComponent>
      
      </div>
  )
}

export default Employees
