import React from 'react'
import dynamic from 'next/dynamic'

import { ITabsInfo } from '@/components/container/tabs'

const DynamicTab = dynamic(() => import('../tabCard/index'))

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
        <ul className='hidden md:flex flex-wrap w-96 justify-between'>
          {tabs.map((tab, i) => (
            <li key={i} className={`block ${activeTab === i ? 'opacity-100' : 'opacity-40'} text-primary-100 font-normal text-lg text-center transition ease-in-out duration-500 mx-1`} onClick={() => handleActiveTab(i)}>
              <span className='underline-text before:bg-primary-100 before:h-0.5'>
                {tab.tab}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden md:flex justify-center items-center w-full h-full'>
        <DynamicTab activeTab={activeTab} tabs={tabs} />
      </div>
    </>
  )
}

export default Tabs