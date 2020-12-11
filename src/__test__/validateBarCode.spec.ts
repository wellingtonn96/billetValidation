import request from 'supertest'

import app from '../app'

describe('Validate bar code', () => {
  it('should be able to validate bank bonds code bar that is valid', async () => {
    const response = await request(app).get(
      '/boleto/34191091646992531293183035710009110110000032152'
    )
  
    expect(response.body).toMatchObject({
      "barCode": "34191091646992531293183035710009110110000032152",
      "amount": "321.52",
      "expirationDate": "14-07-2000"
    })

    expect(response.status).toBe(200)
  })

  it('should not be able to validate bank bonds code that is not valid', async () => {
    const response = await request(app).get(
      '/boleto/sdfsdfsdfasfasfds'
    )
  
    expect(response.body).toMatchObject({
      "erro": "bar code is invalid!"
    })

    expect(response.status).toBe(400)
  })

  it('should be able to validate dealership payments code bar that is valid', async () => {
    const response = await request(app).get(
      '/boleto/826400000012000500971494120566451916412176201124'
    )
  
    expect(response.body).toMatchObject({
      "barCode": "826400000012000500971494120566451916412176201124"
    })

    expect(response.status).toBe(200)
  })

  it('should not be able to validate dealership payments code that is not valid', async () => {
    const response = await request(app).get(
      '/boleto/826400000012000100971494120566451916412176201124'
    )
  
    expect(response.body).toMatchObject({
      "erro": "bar code is invalid!"
    })

    expect(response.status).toBe(400)
  })


  it('should be able to return a response with a correct amount ', async () => {
    const response = await request(app).get(
      '/boleto/03399699255870000180185108001018874650000010000'
    )
  
    expect(response.body.amount).toBe('100')
  })

  it('should be able to return a response with a correct expiration date ', async () => {
    const response = await request(app).get(
      '/boleto/00190461357360753404400056273311964240000025500'
    )
  
    expect(response.body.expirationDate).toBe('10-05-2015')
  })
})
