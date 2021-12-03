const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            
        },
        email: {
            type: String,

        },
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            // Array of _id values referencing the Thought model
        }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
      }
);

// get the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});
  
const User = model('User', UserSchema);

module.exports = User;
