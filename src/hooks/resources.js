import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);


  const resourceService = {
    create: (resource) => {
      axios.post(baseUrl, resource).then((response) => {
        setResources([...resources, response.data]);
        console.log('this is the resource in the setResources create:' , resource)
        console.log('this is the response data with the id from the server in setResources :' , response.data)
      });
    },
  };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setResources(response.data);
    });
  }, [baseUrl]);

  return [resources, resourceService];
};


