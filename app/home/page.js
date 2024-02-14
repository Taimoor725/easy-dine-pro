"use client"
import DBsidebar from '@/components/dashboard/DBSideBar'
import React, { Component } from 'react'
import HNavBar from '@/components/home/HNavBar'
import Hcenter from '@/components/home/Hcenter'

export default class page extends Component {
  render() {
    return (
      <div className='flex h-screen w-full bg-backColor overflow-auto'>
        <DBsidebar/>
        <div>
            <HNavBar/>
            <Hcenter/>
        </div>
      </div>
    )
  }
}
