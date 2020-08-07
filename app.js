const f1=document.querySelector('form'); 
const list=document.querySelector('ul'); 
const table=document.querySelector('table');
var r1=(one,id)=>{
    let html=`
  <td data-id=${id}>  
   ${one.name}  
<<<<<<< HEAD
     </td>   
     <td data-id=${id}>  
=======
     </td> 
 <td data-id=${id}>  
>>>>>>> 9bb569670368bb514dc36b164aa439edce1e7fbe
      ${one.rollnumber} 
  </td>  
   <td data-id=${id}>   
   ${one.marks} 
     </td>  
      <td data-id=${id}> 
        ${one.status} 
          </td> 
<<<<<<< HEAD

         `;     
=======
          `;     
>>>>>>> 9bb569670368bb514dc36b164aa439edce1e7fbe
         //console.log(html);     
         table.innerHTML+=html;
         } 
 
<<<<<<< HEAD
db.collection('Student Details').get().then((d)=>{  
=======
      db.collection('Student Details').get().then((d)=>{  
>>>>>>> 9bb569670368bb514dc36b164aa439edce1e7fbe
       d.docs.forEach(d1 => { 
         console.log(d1.data());  
            // console.log(d1.id);   
                   r1(d1.data(),d1.id);  
                   });
                    //console.log(d.docs[1].data());
                 }).catch((err)=>{ 
                     console.log(err);
                     }) 