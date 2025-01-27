const dotenv = require('dotenv')
const Joi = require('joi')

dotenv.config()

function loadConfig() {
  const configSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().required(),
    DB_URI: Joi.string().uri().required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required(),
  })

  const {error, value} = configSchema.validate(process.env, {allowUnknown: true})
  console.log('- Environment variables loaded...')

  if (error) throw error
  return {...value}
}

module.exports = {loadConfig}
