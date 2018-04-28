import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import * as per from '../controllers/perMessage'

const router = Router()

router.get('/', indexCtrl)

router
    .get('/api/perMessage', per.findMessage)
    .post('/api/perMessage', per.createMessgae)
    .put('/api/perMessage/:id', per.updateMessage)
    .del('/api/perMessage/:id', per.deleteMessage)

export default router
