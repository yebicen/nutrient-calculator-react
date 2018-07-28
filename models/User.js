const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      firstname: {type:DataTypes.STRING, allowNull:false },
      lastname: {type:DataTypes.STRING, allowNull:false },
      role: {
        type:DataTypes.ENUM, 
        values: ['employee','admin'],
        allowNull:false },
      //fb_id:DataTypes.STRING,     
      username: {
        type:DataTypes.STRING, 
        allowNull:false
      },
      password: {
        type:DataTypes.STRING, 

        allowNull:false 
      },
      email: {
        type:DataTypes.STRING, 
        allowNull:false ,
        validate: {
          isEmail: true
        }
      }
    },
    {
      hooks: {
        beforeCreate: function(user, options) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
      }
    });

    User.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    }

    return User;
  };
  