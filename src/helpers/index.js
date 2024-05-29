export const fortmatCurrency = number => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return currency.format(number)
}
