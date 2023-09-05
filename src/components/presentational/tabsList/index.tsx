import React from 'react'

import { ITabsInfo } from '@/components/container/tabs'

import TabCard from '../tabCard/index'

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
          {tabs.map((tab, i) => (
            <li key={i} className={`block ${activeTab === i ? 'opacity-100' : 'opacity-40'} text-primary-100 font-normal text-lg text-center transition ease-in-out duration-500 mx-1`} onClick={() => handleActiveTab(i)}>
              <span className='underline-text before:bg-primary-100 before:h-0.5'>
                {tab.tab}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        <TabCard activeTab={activeTab} tabs={tabs} />
      </div>
    </>
  )
}

export default Tabs
