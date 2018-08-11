const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const flash = require('connect-flash');
const db = require("./models");
const session = require('express-session'); 
const passport = require("./config/passport");
const config = require("./config/extra-config");
const multer  = require('multer');
const uuidv4 = require('uuid/v4');
// const upload = multer({ dest: 'uploads/' });
const app = express();


var sequelize = require('sequelize');

const isAuth 				 = require("./config/middleware/isAuthenticated");
const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

app.use(flash());


//upload images using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    // cb(null, file.fieldname + '-' + Date.now());
    cb(null, newFilename);
  }
})
 
const upload = multer({ storage: storage })
app.post('/uploader', upload.single('selectedFile'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  //  console.log(req.body);
   console.log(req.file);
   console.log(req.body.recipeId);
   const newData = { RecipeImage: req.file.path };
   console.log(newData);
  db.Recipe.update(
    newData,
    {
      where: {
        id: req.body.recipeId
      }
    }).then(function (result) {
      console.log("image url updated");
      res.json(result);
      // res.redirect('/recipes');
    });
  res.send;
})

require('./routes')(app);

// Serve static content for the app from the "public" directory in the application directory.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

else {
  app.use(express.static(path.join(__dirname, '/client/public')));
}

app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// db.sequelize.sync({force: true}).then(function() {
  db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
     console.log("App now listening at localhost:" + PORT);
  });
});