import Twilio from 'twilio'
import { TwilioMessagePayload } from '~/domain/data/payloads/twilio/message'

const $env = useRuntimeConfig()

const twilioClient = Twilio(
  $env.twilio.sid,
  $env.twilio.token
)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<TwilioMessagePayload>(event)
    const twilioResponse = await twilioClient.messages.create({
      from: `whatsapp:${$env.twilio.phoneToSendFrom}`,
      body: body.dream,
      to: `whatsapp:${$env.twilio.phoneToSend}`,
    })
    return twilioResponse
  } catch (error) {
    return {error}
  }
})