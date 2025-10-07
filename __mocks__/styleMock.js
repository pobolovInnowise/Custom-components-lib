// module.exports = new Proxy({}, {
//     get: (target, key) => key,
// });

export default new Proxy({}, {
    get: (target, key) => key,
});