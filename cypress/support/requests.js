export function ProfitDistributionRequest(amountAvailable, callback, failOnStatusCode = true) {
  cy.request({
    url: `https://localhost:5001/Profit/Distribution?amountAvailable=${amountAvailable}`,
    method: 'GET',
    failOnStatusCode
  }).as('response').then(response => {
    callback(response)
  })
}