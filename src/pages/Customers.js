import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Sort,Toolbar,Filter} from'@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'
const Customers = () => {
  return (
    <div className='m-4 md:m-10 overflow-auto p-5 bg-white rounded-3xl'>
    <Header  category="Page" title="Customers" />
        <GridComponent
        toolbar={['Delete']}

        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        editSettings={{allowEditing:true,allowDeleting:true}}
        >
          <ColumnsDirective>
              {customersGrid.map((item,index)=>(<ColumnDirective  key={index} {...item}/>))}
          </ColumnsDirective>
          <Inject services={[Page,Toolbar,Edit,Sort,Filter,Selection ]}/>
        </GridComponent>
    
    </div>
  )
}

export default Customers