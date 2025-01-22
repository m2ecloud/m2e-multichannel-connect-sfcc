exports.beforePOST = function (payload) {
    request.custom.email = payload.c_email
}
exports.afterPOST = function (order) {
    order.setCustomerEmail(request.custom.email)
}
