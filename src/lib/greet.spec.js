import { Pact } from '@pact-foundation/pact'
import path from 'path'

import { getPerson } from './greet'

const provider = new Pact({
  consumer: 'Client',
  provider: 'API',
  host: 'localhost',
  port: 8888,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts')
})

const name = 'Donkey kong'
const response = { name }

describe('Get name API matches contract', () => {
  beforeEach(() => {
    provider
      .setup()
      .then(() => {
        provider.addInteraction({
          uponReceiving: 'Get person',
          withRequest: {
            method: 'GET',
            path: '/get-person'
          },
          willRespondWith: {
            status: 200,
            body: response
          }
        })
      })
  })

  it('Gets valid name', async () => {
    const output = await getPerson()
    expect(output.name).toBe(name)

    provider.verify()
  })

  // it('Contract validates', async () => {
  //   await getName()
  //   provider.verify()
  // })
})
