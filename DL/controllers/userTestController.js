const { userTeasModel } = require('../models/userTest')

async function create(data) {
    return await userTeasModel.create(data);

}
async function read(filter) {
    return await userTeasModel.find(filter);

}
async function update(filter, newData) {
    return await userTeasModel.updateOne(filter, newData);
}
async function del(filter) {
    await update(filter, { isActive: flase })
}

module.exports = { create, read, update, del }

