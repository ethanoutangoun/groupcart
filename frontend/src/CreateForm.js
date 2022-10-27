import React, {useState} from 'react';






function CreateForm() {   


    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "password")
        setGroup(
            {name: group['name'], password: value}
        );
        else
        setGroup(
            {name: value, password: group['password']}
        );   
    }





   const [group, setGroup] = useState(
      {  
         name: '',
         password: '',
      }
   );


   return (
    <form>
      <label htmlFor="name"> Group Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={group.name}
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        value={group.password}
        onChange={handleChange} />
    </form>
); 

}
export default CreateForm;