#!/usr/bin/env node
var infos = require('./App');
(async () => {
var data = await infos()
console.log(`Username : ${data.user}\nName : ${data.name}Email : ${data.email}Ip : ${data.ip}\nHost : ${data.host} \nCity : ${data.city} \nCountry : ${data.country}\nRegion : ${data.region}\nLocation : ${data.location}\nTime Zone : ${data.timezone}`)
})();
    
