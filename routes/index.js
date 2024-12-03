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

// http://localhost:3000/products.json
app.get('/products.json', async function (request, response) {
  const products = await request.app.get("knex")
    .from('product')
    .select('name', 'desc', 'price', 'id')
  response.json(products)
})

// http://localhost:3000/products.html
app.get('/products.html', async function (request, response) {
  const products = await request.app.get("knex")
    .from('product')
    .select('name', 'desc', 'price', 'id')
  response.render("product_listing", { products })
})

// http://localhost:3000/session_test.json
app.get('/session_test.json', function (request, response) {
  if (typeof request.session.session_test === 'undefined')
    request.session.session_test = -1;
  var session_test = request.session.session_test;
  session_test += 1;
  session_test %= 10;
  request.session.session_test = session_test;
  response.json({ session_test: session_test + 1 });
});
