import React from 'react'
import dynamic from 'next/dynamic'

import { ITabsInfo } from '@/components/container/tabs'

const DynamicTabCard = dynamic(() => import('../tabCard/index'), { loading: () => <p>Loading...</p> })

export type TabProp = {
  tabs:ITabsInfo[]
  activeTab: number

}

type TabsProps = TabProp & {
  handleActiveTab: (index:number) => void

}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, handleActiveTab }) => {
  return (
    <>
      <div className='text-center'>
        <ul className='flex flex-wrap w-full md:w-96 justify-between mt-2'>
          {tabs.map((tab, i, tabs) => (
            <React.Fragment key={i}>
              <li className={`block ${activeTab === i ? 'opacity-100' : 'opacity-40'} text-primary-100 font-normal text-lg text-center transition-all ease-in-out duration-500 mx-1`} onClick={() => { handleActiveTab(i) }}>
                <span className='underline-text before:bg-primary-100 before:h-0.5'>
                  {tab.tab}
                </span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <DynamicTabCard activeTab={activeTab} tabs={tabs} />
    </>
  )
}

export default Tabs
