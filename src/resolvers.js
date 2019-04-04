import { tasks } from './sample'

import User from './models/Users'

export const resolvers = {
  Query: {
    
    hello: () => 'Hello world with GraphQL',
    
    greet: (root, { name }, context) => { 
      console.log(context)
      console.log(name)
      return `Hello ${name}`
    },
    
    tasks: () => tasks, 

    users: async () => await User.find()
  }, 

  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length
      tasks.push(input)
      return input
    }, 

    createUser: async (_, { input }) => {
      const newUser = new User(input)
      await newUser.save()
      console.log(newUser)
      return newUser
    }, 

    deleteUser: async (_, { _id }) => await User.findByIdAndDelete(_id), 

    updateUser: async (_, { _id, input }) => await User.findOneAndUpdate(_id, input, { new: true })

  }
}