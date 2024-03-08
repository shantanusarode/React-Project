import React , {useState} from 'react'
const World = () => {
    const [name, setName] = useState('Shantanu')
 
    const onClickHandler = ()=>{
        setName('Shubham')
    }
    return(
<div>
<h1>Welcome  {name}</h1>
<button onClick= {onClickHandler}>Login</button>
</div>
    )
}
export default World;