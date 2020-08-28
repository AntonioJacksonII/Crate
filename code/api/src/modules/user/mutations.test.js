import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import authentication from '../../setup/authentication'

describe('user mutations', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(authentication)

    server.use(
      '/',
      graphqlHTTP(request => ({
        schema: schema,
        graphiql: false,
        context: {
          auth: {
            user: request.user,
            isAuthenticated: request.user && request.user.id > 0
          }
        }
      })))
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

  it('addStyleToUser', async () => {
      const resp = await request(server)
        .get('/')
        .send({ query: '{ userLogin(email: "user@crate.com", password: "123456", role: "USER") { user { id name } token } }' })
        .expect(200)

      const token = resp.body.data.userLogin.token;

      const response = await request(server)
        .post('/')
        .set('Authorization', `Bearer ${token}`)
        .send({ query: `mutation { addStyleToUser(surveyResults: "punk") { id name email style } }`})
        .expect(200)
        expect(response.body.data.addStyleToUser.style).toEqual('punk')
  })
  it('addStyleToUser_sadpath', async () => {
      const resp = await request(server)
        .get('/')
        .send({ query: '{ userLogin(email: "user@crate.com", password: "123456", role: "USER") { user { id name } token } }' })
        .expect(200)

      const token = resp.body.data.userLogin.token;

      const response = await request(server)
        .post('/')

        .send({ query: `mutation { addStyleToUser(surveyResults: "punk") { id name email style } }`})
        .expect(200)
        expect(response.body.errors[0].message).toEqual('Please login to update your style.')

  })
})
