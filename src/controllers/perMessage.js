import perModel from '../models/perMessage'
/**
 * 查询个人信息
 * @param {*} ctx 
 */
export async function findMessage(ctx) {
    let data = await perModel.find()
    ctx.body = {
        code: 0,
        data: data,
        message: 'success'
    }
    ctx.status = 200
}

/**
 * 创建个人信息
 * @param {*} ctx 
 */
export async function createMessage(ctx) {
    let params = ctx.request.body
    let perMessage = new perModel(params)
    await perMessage.save().then(function (err, egg1) {
        ctx.body = {
            code: 0,
            data: perMessage,
            message: 'success'
        }
        ctx.status = 200
    })
}

/**
 * 修改个人信息
 * @param {*} ctx 
 */
export async function updataMessage(ctx) {
    ctx.body = {
        code: 0,
        data: '111',
        message: 'success'
    }
    ctx.status = 200
}

/**
 * 删除个人信息
 * @param {*} ctx 
 */
export async function deleteMessage(ctx) {
    let id = ctx.params.id.replace(':', '')
    await perModel.remove({ '_id': id}).then(function (err, egg1) {
        ctx.body = {
            code: 0,
            message: '删除成功'
        }
        ctx.status = 200
    })
}