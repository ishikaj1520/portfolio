import React from 'react';
import {Doughnut} from 'react-chartjs-2';


var textInside = 'is';
const data={
    maintainAspectRatio:false,
    responsive:false,
    labels:['Reactjs'],
    datasets:[{
    data:[750,250],
    backgroundColor:[
        '#FFCB05',
        '#FFFFFF'
    ]
}] };
const data2={
    maintainAspectRatio:false,
    responsive:false,
    labels:['coding'],
    datasets:[{
    data:[500,500],
    backgroundColor:[
        '#FFCB05',
        '#FFFFFF'
    ]
}] };
const data3={
    maintainAspectRatio:false,
    responsive:false,
    labels:['data analysis'],
    datasets:[{
    data:[300,700],
    backgroundColor:[
        '#FFCB05',
        '#FFFFFF'
    ]
}] };
const options = {
    legend: {
      display: false,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      },
      center:{
          text:textInside
      }
    }
  };
const Skills = () => {
    return ( 
        <div style={{marginTop:"40px",textAlign:"center"}} id="Skill">
            {/* <p style={{color:'#C1C1C1'}}>My personal presentation</p> */}
            <h1>My Finest Skills</h1>
            <div className="graph">
                {/* <Doughnut data={data} options={options}/>
                <Doughnut data={data2} options={options}/>
                <Doughnut data={data3} options={options}/> */}
                <div class="d-flex flex-row bd-highlight mb-3" style={{backgroundColor:"white",color:"black"}}>
  <div class="p-2 bd-highlight"><Doughnut data={data} options={options}/></div>
  <div class="p-2 bd-highlight"><Doughnut data={data2} options={options}/></div>
  <div class="p-2 bd-highlight"><Doughnut data={data3} options={options}/></div>
</div>
            </div>
        </div>
     );
}
 
export default Skills;