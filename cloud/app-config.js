Parse.Cloud.beforeSave('AppConfig', async (req) => {

    const obj = req.object
    const user = req.user

    const query = new Parse.Query(Parse.Role)
    query.equalTo('name', 'Admin')
    query.equalTo('users', user)

    const isAdmin = await query.first({ useMasterKey: true })

    if (!isAdmin) throw 'Not Authorized'

    if (!obj.existed()) {
        const acl = new Parse.ACL()
        acl.setRoleReadAccess('Admin', true)
        acl.setRoleWriteAccess('Admin', true)
        obj.setACL(acl)
    }
})