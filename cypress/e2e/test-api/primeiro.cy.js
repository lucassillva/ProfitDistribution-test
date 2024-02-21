
import { convertFromString } from '../../support/currency'
import { ProfitDistributionRequest } from '../../support/requests'

const SB = 12696.20
const PTA = 5
const PAA = 1
const PFS = 5

describe('Test Back-end', () => {
  it('Should list the employees and their participation Value', () => {
    ProfitDistributionRequest(40000000, (response) => {
      let expectedTotalDistributed = 0

      response.body.data.participations.forEach(employee => {
        expectedTotalDistributed += convertFromString(employee.participationValue)
      })

      var totalDistributed = convertFromString(response.body.data.totalDistributed).toFixed(2)

      expect(response.status).to.be.equal(200)
      expect(response.body).not.be.empty
      expect(totalDistributed).to.be.equal(expectedTotalDistributed.toFixed(2))
    })
  })

  it('Should the participationValue value must be in accordance with the calculation of the formula', () => {
    ProfitDistributionRequest(4000000, (response) => {
      let employeeParticipationValue = 0 
      
      employeeParticipationValue = ((SB * PTA + SB * PAA) / PFS) * 12 
      
      var participationValue = convertFromString(response.body.data.participations[0].participationValue).toFixed(2)
      
      expect(response.status).to.be.equal(200)
      expect(participationValue).to.be.equal(employeeParticipationValue.toFixed(2))
    })
  })

  it('Should that an invalid amountAvailable value is reported', () => {
    ProfitDistributionRequest(1000000, (response) => { 
      expect(response.status).to.be.equal(400)  
    }, false)
  })
  
  //teste
})

