
import axios from 'axios';
import { useState, useEffect } from 'react';
import Company from './components/company/Company'

/*{
ceo: "Elon Musk"
coo: "Gwynne Shotwell"
cto: "Elon Musk"
cto_propulsion: "Tom Mueller"
employees: 8000
founded: 2002
founder: "Elon Musk"
headquarters: {address: "Rocket Road", city: "Hawthorne", state: "California"}
id: "5eb75edc42fea42237d7f3ed"
launch_sites: 3
links: {website: "https://www.spacex.com/", flickr: "https://www.flickr.com/photos/spacex/", twitter: "https://twitter.com/SpaceX", elon_twitter: "https://twitter.com/elonmusk"}
name: "SpaceX"
summary: "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
test_sites: 1
valuation: 52000000000
vehicles: 3
}
*/

function App() {
  //state
  const [company, setCompany] = useState ({});

  useEffect(() => {
    const fetchCompany = async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/company'); //end point goes in parantheses
    const data = response.data;
    console.log(data);
    //destructuring
    const { ceo, employees, name, valuation, vehicles  } = data;
    setCompany({
      student: 'Marisela Espinoza', //no student date in the API, we made it up ourselves
      ceo: ceo, 
      employees: employees,
      name: name, //key: value,
      valuation, //can also type it like this and it knows that it wants it to be the key and the value
      vehicles
    });
  }
  fetchCompany();
}, [])
console.log(company)
  return (
    <div>
      <h1>GA Space X</h1>
      <Company company={company} />
    </div>
  );
}

export default App;
