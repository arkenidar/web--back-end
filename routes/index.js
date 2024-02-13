import express from "express"
let router = express.Router()
export default router

router.get('/', async function (req, res, next) {
  const output_rows = await req.app.get("knex")
    .from('newtable')
    .select('column1', 'column2')
  res.render('index', { items: output_rows, title: 'Express WebApp in NodeJS !!!' })
});
