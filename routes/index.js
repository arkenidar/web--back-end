import { Router } from "express"
const app = Router()
export default app

app.get('/message/listing', async function (request, response) {

  const messages = await request.app.get("knex")
    .from('chat_messages')
    .select('sender', 'message_text')

  response.render("message_listing", { messages })
})

app.post('/message/sending', async function (request, response) {

  const { sender, message_text } = request.body
  const message = { sender, message_text }

  await request.app.get("knex")
    .from('chat_messages')
    .insert([message])

  response.end()
})

app.get('/ejs', async function (request, response) {

  const rows = await request.app.get("knex")
    .from('chat_messages')
    .select('sender', 'message_text')

  response.render('index', { items: rows, title: 'Express WebApp in NodeJS !!!' })

})

