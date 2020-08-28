import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'

describe('user queries', () => {
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

  it('returns all users', async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { email name } }'})
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
  })

  it('returns user by id', async () => {
    const user = await models.User.findOne({ where: { name: 'The User' } })
    const response = await request(server)
      .get('/')
      .send({ query: `{ user(id: ${user.id}) { email name style } }`})
      .expect(200)

    expect(response.body.data.user.name).toEqual('The User')
    expect(response.body.data.user.style).toEqual('punk')
  })

  it('is true', () => {
    expect(true).toBe(true)
  })
})
