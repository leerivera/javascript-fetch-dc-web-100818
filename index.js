

const token = '49c85dabb1457d92bf7d374dddb02cd43df60718'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
