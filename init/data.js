const user = [
  {
    user_name: "hcy",
    user_password: "111",
    email: "793025324@qq.com"
  },
  {
    user_name: "wode",
    user_password: "111",
    email: "793035124@qq.com"
  },
  {
    user_name: "isuser",
    user_password: "111",
    email: "793035324@qq.com"
  }
];

const role = [
  {
    role_name: "超级管理员"
  },
  {
    role_name: "管理员"
  },
  {
    role_name: "用户"
  },
  {
    role_name: "这是角色表"
  }
];

const user_role = [
  {
    user_id: 1,
    role_id: 2
  },
  {
    user_id: 2,
    role_id: 1
  },
  {
    user_id: 3,
    role_id: 3
  }
];

const dynamic = [
  {
    dynamic_content: "呵呵哒",
    like_count: 10,
    dynamic_permiss: 4
  },
  {
    dynamic_content: "呵呵哒",
    like_count: 10,
    dynamic_permiss: 4
  },
  {
    dynamic_content: "这是动态表",
    like_count: 10,
    dynamic_permiss: 1
  }
];

const dynamic_comment = [
  {
    comment_content: "哈哈哈"
  },
  {
    comment_content: "呵呵呵"
  },
  {
    comment_content: "嘻嘻嘻"
  },
  {
    comment_content: "这是评论表"
  }
];

const schedule={};
const collect={};
const dynamic_respond = [
  {
    respond_content: "哈哈哈"
  },
  {
    respond_content: "呵呵呵"
  },
  {
    respond_content: "嘻嘻嘻"
  },
  {
    respond_content: "这是回复表"
  }
];



module.exports = {
  user,
  role,
  user_role,
  dynamic,
  dynamic_comment,
  dynamic_respond,
  schedule,
  collect
};
