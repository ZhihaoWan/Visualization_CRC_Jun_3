//import React from "react";
import Plot from "react-plotly.js";
import './App.css';
import React, { useEffect, useState } from 'react'
//import { Form, Input, InputNumber, Radio, Modal, Cascader ,Tree} from 'antd'
import axios from 'axios'

// export default UserTree;
function App(){
  const[arrx,setarrx]=useState([]);
  const[arry,setarry]=useState([]);

  useEffect(()=>{
    const AUTH_TOKEN = 'Token 0bfda2118118484d52aeec86812269aadeb37c67';
    axios.defaults.baseURL = 'https://voyages3-api.crc.rice.edu'; //'http://127.0.0.1:8000'
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    var data = new FormData();
    // data.append("voyage_itinerary__imp_principal_region_slave_dis__region","Barbados")
    data.append('groupby_fields','voyage_itinerary__imp_principal_port_slave_dis__geo_location__name')
    data.append('groupby_fields','voyage_slaves_numbers__imp_total_num_slaves_disembarked')
    data.append('agg_fn','sum')
    data.append('cachename','voyage_bar_and_donut_charts')

    axios.post('/voyage/groupby', data)
    .then(function (response) {
      // console.log(response.data)
      // console.log(Object.keys(Object.values(response.data)[0]));
      // console.log(Object.values(Object.values(response.data)[0]));
      setarrx(Object.keys(Object.values(response.data)[0]));
      setarry(Object.values(Object.values(response.data)[0]));


    })
    .catch(function (error) {
      console.log(error);
    });

    ;
  },[])
  return (

    <div className='button_container'>
      <Plot
        data={[
          {
            x: arrx,
            y: arry,
            type: 'bar'
          },
        ]}
      />
    </div>

  )
}

export default App;
// export default App;
// class App extends React.Component {
//   render() {
//     var trace1 = {
//       x: [1, 2, 3, 4],
//       y: [0, 2, 3, 5],
//       fill: 'tozeroy',
//       type: 'scatter'
//     };
    
//     var trace2 = {
//       x: [1, 2, 3, 4],
//       y: [3, 5, 1, 7],
//       fill: 'tonexty',
//       type: 'scatter'
//     };
//     return (
//       <div>
//         <Plot
//           data={[
//             {
//               x: ['giraffes', 'orangutans', 'monkeys'],
//               y: [20, 14, 23],
//               type: 'bar'
//             },
//           ]}
//         />
//         <Plot
//           data = {[
//             {
//               values: [19, 26, 55],
//               labels: ['Residential', 'Non-Residential', 'Utility'],
//               type: 'pie'
//             }
//           ]}
//           layout = {{
//             height: 400,
//             width: 500
//           }}
//         />
//         <Plot
//           data = {[trace1, trace2]}
//         />
//       </div>
        
//     );
//   }
// }






