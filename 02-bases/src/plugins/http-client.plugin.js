

const httpClientPlugin = {

  get: async(url) => {
    const resp = await fetch(url);
    return await resp.json();
  },
  
  post: async(url) => {},
  put: async(url) => {},
  delete: async(url) => {}


};


module.exports = {
  http: httpClientPlugin,
};



