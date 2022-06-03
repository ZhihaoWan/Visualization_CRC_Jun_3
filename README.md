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
1. Install all packages as follows

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

2. 


------
### Deployment 
**Process:**
```shell
git clone [this project]

cd [this project]

git init 

heroku create -b https://github.com/mars/create-react-app-buildpack.git

git add .

git commit -m "React Projct is deployed on Heroku"

git push heroku master

heroku open
```