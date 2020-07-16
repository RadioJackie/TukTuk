module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  post.associate = models => {
    post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  post.associate = (models) => {
    post.hasMany(models.card, {
      foreignKey: {
        onDelete: "cascade"
      }
    });
  };
  
  return post;
};
