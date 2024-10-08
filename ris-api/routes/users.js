var express = require('express');
var router = express.Router();
const { User } = require('../models');
const { Op } = require('sequelize');
const { success, failure } = require('../utils/responses');
const jwt = require('jsonwebtoken');

router.get('/', async function(req, res, next) {
    try {
        const query = req.query
        const currentPage = Math.abs(Number(query.currentPage)) || 1
        const pageSize = Math.abs(Number(query.pageSize)) || 10
        const offset = (currentPage - 1) * pageSize

        const condition = {
            order: [['id', 'DESC']],
            limit: pageSize,
            offset: offset
        }
        if (query.email) {
          condition.where = {
            email: {
              [Op.eq]: query.email
            }
          };
        }
        
        if (query.username) {
          condition.where = {
            username: {
              [Op.eq]: query.username
            }
          };
        }
        
        const { count, rows} = await User.findAndCountAll(condition)
        const data = {
            article: rows,
            pagination: {
                total: count,
                currentPage: currentPage,
                pageSize: pageSize
            }
        }
        success(res, '查询用户成功', data, 200)
    }catch(error){
        failure(res, error)
    }
});

router.post('/', async function(req, res, next) {
  try{
      const user = await User.create(filterBody(req))
      // 生成身份验证令牌
      const token = jwt.sign(
        { userId: user.id }, 
        process.env.SECRET, { expiresIn: '30d' }
      );
      success(res, '创建用户成功', 
        {
          token: token, 
          userInfo: {
            username: user.username,
            email: user.email,
          } 
        }, 201)
  }catch(error){
      failure(res, error)
  }
});

function filterBody(req) {
  return {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
}

module.exports = router;