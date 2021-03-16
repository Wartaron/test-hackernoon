import axios from 'axios';

const fetchInformation = async (url) => {
  let response = await axios(url, {
    method: 'get',
  });

  return response.data;
};

export default {
  fetchInformation,
};
