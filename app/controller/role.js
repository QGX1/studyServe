module.exports = app => {
    return class RoleController extends app.Controller {
      * index() {
        const roles = yield this.ctx.model.Role.findAll({
          attributes: [ 'id', 'user_id' ],
          include: { model: this.ctx.model.User, as: 'user' },
          where: { status: 'publish' },
          order: 'id desc',
        });
   
        this.ctx.body = roles;
      }
      * show() {
        const role = yield this.ctx.model.Role.findById(this.params.id);
        const role1 = yield role.getUser();
        this.ctx.body = role1;
      }
   
      * destroy() {
        const role = yield this.ctx.model.Role.findById(this.params.id);
        yield role.destroy();
        this.ctx.body = { success: true };
      }
    }
  }