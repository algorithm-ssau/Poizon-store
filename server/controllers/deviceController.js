async getAll(req, res){
    let{brandId, typeId, limit, page}= req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let devices;
    if(!brandId&&!typeId){
        devices = await Device.findAndCountAll({limit, offset})
    }
    if(brandId&&!typeId){
        devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
    }
    if(!brandId&&typeId){
        devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
    }
    if(brandId&&typeId){
        devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset})
    }
    return res.json(devices)
}