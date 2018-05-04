import perModel from '../models/perMessage'
/**
 * 查询个人信息
 * @param {*} ctx 
 */
export async function findMessage(ctx) {
    let params = {}
    if (ctx.query.name) {
        params.name = {
            $regex: `.*${ctx.query.name}.*`
        }
    }
    if (ctx.query.area) {
        params.area = ctx.query.area
    }
    await perModel.find(params).then(function (message) {
        ctx.body = {
            code: 0,
            data: message,
            message: '查找成功'
        }
        ctx.status = 200
    })
}

/**
 * 创建个人信息
 * @param {*} ctx 
 */
export async function createMessage(ctx) {
    let params = ctx.request.body
    let perMessage = new perModel(params)
    await perMessage.save().then(function (err, message) {
        ctx.body = {
            code: 0,
            data: perMessage,
            message: '新增成功'
        }
        ctx.status = 200
    })
}

/**
 * 修改个人信息
 * @param {*} ctx 
 */
export async function updataMessage(ctx) {
    let id = ctx.params.id.replace(':', '')
    let params = ctx.request.body
    await perModel.findByIdAndUpdate(id, params).then(function (err, message) {
        ctx.body = {
            code: 0,
            data: params,
            message: '修改成功'
        }
        ctx.status = 200
    })
}

/**
 * 删除个人信息
 * @param {*} ctx 
 */
export async function deleteMessage(ctx) {
    let id = ctx.params.id.replace(':', '')
    await perModel.remove({ '_id': id }).then(function (err, message) {
        ctx.body = {
            code: 0,
            message: '删除成功'
        }
        ctx.status = 200
    })
}