// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Whiteboard | Landing pages profissionais e de alta conversão',
      meta: [
        { name: 'description', content: `Transforme seu negócio com landing pages de alta conversão | Desenvolvedor Front-End Especialista | Estratégias personalizadas para conversões máximas ` },
      ],
      link: [
        { rel: 'preconnect', href: "https://fonts.goolgleapis.com" },
        { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: "true" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;600;800&display=swaphttps://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;600;800&display=swap" }
      ]
    }
  },
  css: [
    '@/assets/css/index.css',
    'notyf/notyf.min.css'
  ],
  runtimeConfig: {
    twilio: {
      sid: process.env.TWILIO_ACC_SID,
      token: process.env.TWILIO_AUTH_TOKEN,
      phoneToSend: process.env.TWILIO_PHONE_TO_SEND,
      phoneToSendFrom: process.env.TWILIO_PHONE_TO_SEND_FROM
    }
  }
})

