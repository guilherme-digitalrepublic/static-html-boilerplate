/**
 * Constants for field validation.
 * @enum {Object<number>}
 */
const CONSTANTS = {
  phoneLength: 15
}

/**
 * Name validation.
 * @param {String} value Name of the user
 * @returns {String|null} If field is invalid, returns the error message
 */
function validateName(value) {
  if (value.length < 1) return 'Campo obrigatório'
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
  return regex.test(value) ? null : 'Nome inválido'
}

/**
 * Phone validation.
 * @param {String} value Phone of the user
 * @returns {String|null}If field is invalid, returns the error message
 */
function validatePhone(value) {
  if (value.length < 1) return 'Campo obrigatório'
  return value.length === CONSTANTS.phoneLength ? null : 'Telefone inválido'
}

/**
 * E-mail validation.
 * @param {String} value E-mail of the user
 * @returns {String|null}If field is invalid, returns the error message
 */
function validateEmail(value) {
  if (value.length < 1) return 'Campo obrigatório'
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(value).toLowerCase()) ? null : 'E-mail inválido'
}

/**
 * Message validation.
 * @param {String} value Message of the user
 * @returns {String|null}If field is invalid, returns the error message
 */
function validateMessage(value) {
  return value.length > 1 ? null : 'Campo obrigatório'
}

export { validateName, validateEmail, validatePhone, validateMessage }
