import React,{useState} from 'react';
import classes from './SearchBar.module.css';
const SearchBar = ({data}) => {
	const [searchTerm,setsearchTerm]=useState("");

    return (
    	<div className={classes.container}>
    	<div className={classes.searchWrapper}><input onChange={(e)=>setsearchTerm(e.target.value)} className={classes.searchBar} type='text' name='search' placeholder="Search"/>
           </div>
         <div className={classes.cardWrapper}>
          
            {data.filter((val)=>{

            	if(searchTerm===""){
            		return val;
            	} else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            		return val;
            	}
            }).map((item,index)=>{
            	const {id,first_name,last_name,email,gender,address,image,Details }=item;
              return <div className={classes.card} key={index}>
              <img src={image}/>
              <p>{first_name} {last_name}</p>
              <p>{email}</p>
              <p>{address}</p>
              </div>  
            })}
         </div>

    	</div>
        
    );
};


export default SearchBar;
