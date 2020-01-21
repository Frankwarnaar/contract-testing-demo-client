// import { Pact } from '@pact-foundation/pact'

import greet, { getName } from './greet'

describe('Greet', () => {
  describe('Get name', () => {
    it('Gets valid name', async () => {
      const name = await getName()
      expect(typeof(name)).toBe('string')
    })
  })
})
