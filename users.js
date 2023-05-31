import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = ({ apiUrl = "https://jsonplaceholder.typicode.com/users" }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <table border="2">
      <thead>
        <tr>
          <th rowSpan="3">ID</th>
          <th rowSpan="3">Name</th>
          <th rowSpan="3">UserName</th>
          <th rowSpan="3">Email</th>
          <th colSpan="6">Address</th>
          {/* <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zipcode</th> */}
          {/* <th colSpan= "2">Geo</th> */}
          {/* <th>Lat</th>
          <th>Lng</th> */}
          <th rowSpan="3">Phone</th>
          <th rowSpan="3">Website</th>
          <th colSpan="3">Company</th>
          {/* <th>Name</th>
          <th>CatchPhrase</th>
          <th>BS</th> */}
        </tr>
        <tr>
          <th rowSpan= "2">Street</th>
          <th rowSpan= "2">Suite</th>
          <th rowSpan= "2">City</th>
          <th rowSpan= "2">Zipcode</th>
          <th colSpan="2">Geo</th>
          <th rowSpan= "2">Name</th>
          <th rowSpan= "2">CatchPhrase</th>
          <th rowSpan= "2">BS</th>
        </tr>
        <tr>
          <th>Lat</th>
          <th>Lng</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.address.suite}</td>
            <td>{item.address.city}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.address.geo.lat}</td>
            <td>{item.address.geo.lng}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
            <td>{item.company.catchPhrase}</td>
            <td>{item.company.bs}</td>

            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
