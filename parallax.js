import React, { Component } from 'react'
import axios from 'axios';

export default class parallax extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr : [] 
        }
      
    }
    

    componentDidMount(){
        axios.get('http://localhost:8080/time/values').then(data => {
            console.log(data.data.data);
            const arr  = data.data.data.map(ite => {
                
                let dataobj = new Date(ite.timestamp * 1000);
                let ustime = dataobj.toLocaleString("en-US", { 
                    timeZone: "America/New_York"  
                }); 
                let lontime = dataobj.toLocaleString("en-US", { 
                    timeZone: "Europe/London"  
                }); 

                return {
                    assian : dataobj,
                    newyork : ustime,
                    lontime : lontime
                }
            })
            this.setState({arr : arr} ,() => {
                console.log(arr)

            } )
            
        })

    }

   
    render() {
        console.log(this.state.arr)
        
        
//checks
        return (
            <div>
                {this.state.arr.map(ite => {
            return `assian : ${ite.assian} newyork : ${ite.newyork} london : ${ite.lontime} ++++++++++++++++++++++++`
        })}
            </div>
        )
    }
}
