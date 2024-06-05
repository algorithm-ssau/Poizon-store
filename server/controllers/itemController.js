const uuid = require('uuid')
const path = require('path')
const {Item, Item_Info} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next){
        try{
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const item = await Item.create({name, price, brandId, typeId, img:filename})

            if (info){
                info = JSON.parse(info)
                info.array.forEach(element => 
                    Item_Info.create({
                        title: element.title,
                        description: element.description,
                        itemId: item.id
                }));
            }
            return res.json(item)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let items
        if (!brandId && !typeId){
            items = await Item.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId){
            items = await Item.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId){
            items = await Item.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId){
            items = await Item.findAndCountAll({where:{brandId, typeId}, limit, offset})
        }
        return res.json(items)
    }
    async getOne(req, res){
        const {id} = req.params
        const item = await Item.findOne(
            {where: {id},
            include: [{model: Item_Info, as: 'info'}]}
        )
        return res.json(item)
    }
}

module.exports = new ItemController()