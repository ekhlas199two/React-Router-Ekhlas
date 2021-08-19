import "./App.js"
import React from 'react';
import { useHistory, useParams } from "react-router";
import {Button} from 'react-bootstrap';


function Trailer (props) {
    const {trailerId}=useParams()
    const obj=props.movies.find(el=>el.id ==trailerId)
const history=useHistory()
    
    return(
       

<div>
        

        
        
         
          <iframe width="100%" height="500px" src={obj.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            <h1 > {obj.title}</h1> 
            
            <p> {obj.description}</p> 
            
            <Button onClick={()=>history.goBack()}>Home</Button>
          
        



</div>
  




    
    )

}


export default Trailer;