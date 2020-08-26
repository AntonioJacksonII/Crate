import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'

describe('user mutations', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    )
  })

  it('userSignup', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: 'mutation { userSignup(name: "test", email: "test3", password: "test") { id name email } }'})
      .expect(200)
      expect(response.body.data.userSignup.email).toEqual('test3')

      const id = response.body.data.userSignup.id;

      await request(server)
        .post('/')
        .send({ query: `mutation { userRemove(id: ${id}) { id name email } }`})
        .expect(200)
  })
})
