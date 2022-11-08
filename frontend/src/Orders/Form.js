//Form to add items

import React, {useState} from 'react';



function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job")
       setPerson(
          {name: person['name'], job: value}
       );
    else
      setPerson(
          {name: value, job: person['job']}
       );   
  }





function Form() {   
   const [item, setItem] = useState(
      {  
         item: '',
         quantity: '',
      }
   );

}
export default Form;