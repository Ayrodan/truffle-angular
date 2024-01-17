module.exports = {
  networks : {
    ganache : {
      host : '127.0.0.1',
      port : 8545,    // By default Ganache runs on this port.
      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
    }
  }
};
