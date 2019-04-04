import mongoose, { mongo } from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/mongodbgraphql', {
      useNewUrlParser: true
    })
    await mongoose.set('useFindAndModify', false);
    
    console.log('>>> DB is connected...')
  }
  catch(e) {
    console.error('Something goes wrong!')
    console.error(e)
  }
}

