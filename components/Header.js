import React from 'react'
import { MdOutlineInsertChartOutlined } from "react-icons/md";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden"> 
            <img src='profile.png' alt='' />
          </div>
          <small>Hi, Bosdk!</small>
        </div>

      {/* right side of the header */}
      <div className="flex gap-4 items-center" >
        <div><MdOutlineInsertChartOutlined className="w-9 h-9 c" href=""/></div>
        <div><button className="btn signOut">Sign Out</button></div>
      </div>
      </header>
  )
}

export default Header;