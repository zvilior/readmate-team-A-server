const { classModel } = require('../models/class')

async function create(data) {
    return await classModel.create(data);

}
async function read(filter) {
    return await classModel.find(filter);

}
async function update(filter, newData) {
    return await classModel.updateOne(filter, newData);
}
async function del(filter) {
    await update(filter, { isActive: flase })
}

module.exports = { create, read, update, del }

