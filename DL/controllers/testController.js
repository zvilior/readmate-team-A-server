const { testModel } = require('../models/test')

async function create(data) {
    return await testModel.create(data);

}
async function read(filter) {
    return await testModel.find(filter);

}
async function update(filter, newData) {
    return await userModel.updateOne(filter, newData);
}
async function del(filter) {
    await update(filter, { isActive: flase })
}

module.exports = { create, read, update, del }

