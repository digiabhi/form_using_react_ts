import { ChangeEvent, FC, FormEvent, useState } from "react";


const Controlled: FC = () =>{
    const [value, setValue] = useState<object>({
        firstName:"",
        lastName:""
    });


const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const name = e.target.name;
    const newValue = e.target.value;
    setValue({
        ...value,
        [name]: newValue
    })
}

const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(value);
}

return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleChange} placeholder="Enter First Name.." />
        <input type="text" name="lastName" onChange={handleChange} placeholder="Enter Last Name.." />
        <button>Submit</button>
    </form>
)
}

export default Controlled;