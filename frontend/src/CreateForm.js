import React, {useState} from 'react';






function CreateForm(props) {   


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

    function submitFormCreate() {
        props.handleSubmit(group);
        setGroup({name: '', password: ''});
      }

    function submitFormJoin(){

    }




   const [group, setGroup] = useState(
      {  
         name: '',
         password: '',
         
      }
   );


   return (
    <form>
    
    <div >
      <label htmlFor="name"> Group Name</label>
        <div>
        <input
        type="text"
        name="name"
        id="name"
        value={group.name}
        onChange={handleChange} />
        </div>
    </div>

    <div>
      <label htmlFor="password">Password</label>
        <div>
        <input
        type="text"
        name="password"
        id="password"
        value={group.password}
        onChange={handleChange} />
        </div>
    </div>
    <input type="button" value="Create Group" onClick={submitFormCreate} />
    <input type="button" value="Join Group" onSubmit={submitFormJoin} />
    </form>
); 

}
export default CreateForm;