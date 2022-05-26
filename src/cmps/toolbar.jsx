import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile, CgColorBucket } from 'react-icons/cg'
import { BiFilterAlt, BiSortAlt2 } from 'react-icons/bi'

export const ToolBar = () => {
  return (
    <div className="toolbar flex">
      <div>New Project</div>
      <div>
        <AiOutlineSearch />
        <span>Search</span>
      </div>
      <div>
        <CgProfile />
        <span>Person</span>
      </div>
      <div>
        <BiFilterAlt />
        <span>Filter</span>
      </div>
      <div>
        <BiSortAlt2 />
        <span>Sort</span>
      </div>
      {/* <div>
        <CgColorBucket />
      </div> */}
    </div>
  )
}
