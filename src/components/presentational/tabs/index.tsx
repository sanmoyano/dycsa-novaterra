import React from 'react'

import { ITabsInfo } from '@/components/container/tabs'

type TabsProps = {
  tabs:ITabsInfo[]
  activeTab: number
  handleActiveTab: (index:number) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, handleActiveTab }) => {
  return (
    <div className='text-center'>
      <ul className='hidden md:flex flex-wrap w-96 justify-between'>
        {tabs.map((tab, i) => (
          <li key={i} className={`block ${activeTab === i ? 'opacity-1 font-bold' : 'opacity-40 font-normal'} text-primary-100 text-lg text-center transition ease-in-out duration-500 mx-1`} onClick={() => handleActiveTab(i)}>
            <span className='underline-text before:bg-primary-100 before:h-0.5'>
              {tab.tab}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs
