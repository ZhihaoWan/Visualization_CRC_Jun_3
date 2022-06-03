# Visualization 
> Team: Jiran Yang, Jason Fang, Gaoyuan Chen, Zhihao Wan

### TODO:
 - [ ] Routing
       - Apply `React-Route`. (You may install it before run this application). This file logic is stroed in `mmm.js`
 - [ ] Extract/ Create a new environment varibles, local x/y varibles to static file
       - Extract all those static into `***.js`, `$$$.js`, and import them into the main component.
 - [ ] OPTION call (labels in dropdown)
       - Replace the complex drop down name to simple flat dropdown name.
 - [ ] General README, Heroku Final Deployment and Heroku Configuration
       - Add token, base URL to Heroku Configuration.
<!-- ### Consider about:
- [ ] Secret Token (For every single user)
   -->

### How it works?
**1. Clone the project to local**

```
git clone [project link]
```

**2. Run `npm install`** 
It installs all the packages that project need. If install process failed, you clould check as follows:

**React-Route**
```javaScript
npm install --save react-router-dom
```

**React-Plotly**
```javaScript
npm install react-plotly.js plotly.js
```

**Axios**
```javaScript
npm install axios
```

**3. Authorization**
In the `.env`, you could change `REACT_APP_AUTHTOKEN` 

**4. Run Application**
```javaScript
npm start
```



------
### Deployment 
**Deployment Process:**
```shell
git clone [this project]

cd [this project]

git init 

heroku create -b https://github.com/mars/create-react-app-buildpack.git

# Configiration Process
# For more detials, check https://devcenter.heroku.com/articles/config-vars

git add .

git commit -m "React Projct is deployed on Heroku"

git push heroku master

heroku open
```

**Configiration Process**
```shell
# View current config var values
heroku config
# Example:
# GITHUB_USERNAME: Jiran
# REACT_APP_AUTHTOKEN: 'Token asdbchuawjfv112baisuyofgkue'    
# REACT_APP_BASEURL: https://voyages3-api.crc.rice.edu
```

```shell
# Set all config vars example:
heroku config:set GITHUB_USERNAME=joesmith
heroku config:set REACT_APP_AUTHTOKEN='Token asdbchuawjfv112baisuyofgkue'   
heroku config:set REACT_APP_BASEURL='https://voyages3-api.crc.rice.edu'
```
```shell
# Remove config vars example:
heroku config:unset GITHUB_USERNAME
```
