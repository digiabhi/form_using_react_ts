import { FC, FormEvent, useEffect, useRef } from "react";
import AutoFocusInput from "./AutoFocusInput";


const Uncontrolled: FC = () =>{

const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    
}


return (
    <form onSubmit={handleSubmit}>
        <AutoFocusInput/>
        <input type="text" name="lastName" placeholder="Enter Last Name.." />
        <button>Submit</button>
    </form>
)
}

export default Uncontrolled;