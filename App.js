var axios = require('axios'),
util = require('util'),
os = require("os"),
exec = util.promisify(require('child_process').exec)

module.exports = async () => {
var data = await axios.get('http://ipinfo.io/json')
return {
    user:process.env.USER,
    name: (await exec('git config --get user.name')).stdout,
    email:(await exec('git config --get user.email')).stdout,
    ip:data.data.ip,
    host:os.hostname(),
    city:data.data.city,
    country:data.data.country,
    region:data.data.region,
    location:data.data.loc,
    timezone:data.data.timezone,
}
}