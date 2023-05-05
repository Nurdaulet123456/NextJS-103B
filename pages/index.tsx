import HomeLayouts from "@/layouts/HomeLayouts"
import { useState } from "react"
import Modal from "@/components/Modal"



const Main = () => {

  let [value, setValue] = useState<boolean>(false)

  return (

    <>
      <div>
        {value === true ? <Modal click={() => setValue(false)}/> : null}
        <button onClick={() => setValue(true)}>Open</button>
        <HomeLayouts>
          <img src="/img/adasdasdasds" alt="" />
        </HomeLayouts>
      </div>
    </>
  )
}

export default Main