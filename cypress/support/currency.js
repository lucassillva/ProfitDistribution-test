export function convertFromString(numero) {
  let numeroConvert = numero.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.')
  let novoValor = parseFloat(numeroConvert)
  return parseFloat(novoValor)
}