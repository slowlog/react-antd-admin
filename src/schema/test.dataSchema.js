import React from 'react';
import {Icon} from 'antd';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

module.exports = [
  {
    key: 'id',  // 传递给后端的key
    title: 'ID',  // 前端显示的名字

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'int',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id
    primary: true,

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/imageArray/file/switch
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false

    // 扩展接口, 决定了这一列渲染成什么样子
    render: (text, record) => text,
  },
  {
    key: 'name',
    title: '用户名',
    dataType: 'varchar',  // 对于普通的input框, 可以设置addonBefore/addonAfter
    placeholder: '请输入用户名',
    addonBefore: (<Icon type="user"/>),
    addonAfter: '切克闹',
    defaultValue: 'foolbear', // 默认值
  },
  {
    key: 'weight',
    title: '体重(千克)',
    dataType: 'int',
    min: 10,
    defaultValue: 70, // 默认值
    disabled: true,
  },
  {
    key: 'gender',
    title: '性别',
    dataType: 'int',
    showType: 'radio',
    options: [{key: '1', value: '男'}, {key: '2', value: '女'}],
    defaultValue: '1',
    disabled: true,
  },
  {
    key: 'marriage',
    title: '婚否',
    dataType: 'varchar',
    showType: 'select',
    options: [{key: 'yes', value: '已婚'}, {key: 'no', value: '未婚'}],
  },
  {
    key: 'interest',
    title: '兴趣爱好',
    dataType: 'int',
    showType: 'checkbox',
    options: [{key: '1', value: '吃饭'}, {key: '2', value: '睡觉'}, {key: '3', value: '打豆豆'}],
    defaultValue: ['1', '2'],
  },
  {
    key: 'good',
    title: '优点',
    dataType: 'varchar',
    showType: 'multiSelect',
    options: [{key: 'lan', value: '懒'}, {key: 'zhai', value: '宅'}],
  },
  {
    key: 'pic1',
    title: '头像',
    dataType: 'varchar',
    showType: 'image',  // 后端必须提供图片上传接口
    showInTable: false,
  },
  {
    key: 'pic2',
    title: '自拍',
    dataType: 'varchar',
    showType: 'imageArray',  // 上传多张图片
    limit: 5, // 最多传几张图片
    showInTable: false,
  },
  {
    key: 'jianli',
    title: '简历',
    dataType: 'varchar',
    showType: 'file',  // 文件上传
    url: 'xxx',  // 要上传的地址
    disabled: true,
    showInTable: false,
  },
  {
    key: 'desc',
    title: '个人简介',
    dataType: 'varchar',
    showType: 'textarea',  // 用于编辑大段的文本
    showInTable: false,
    defaultValue: '个人简介个人简介个人简介',
  },
  {
    key: 'score',
    title: '分数',
    dataType: 'int',
    max: 99,
    min: 9,
  },
  {
    key: 'gpa',
    title: 'GPA',
    dataType: 'float',
    max: 9.9,
    placeholder: '哈哈',
  },
  {
    key: 'birthday',
    title: '生日',
    // 对于日期类型要注意下, 在js端日期被表示为yyyy-MM-dd HH:mm:ss的字符串, 在java端日期被表示为java.util.Date对象
    // fastjson反序列化时可以自动识别
    // 序列化倒是不用特别配置, 看自己需求, fastjson会序列化为一个字符串, 前端原样展示
    dataType: 'datetime',
    // 对于datetime而言, 配置showType是无意义的
    placeholder: 'happy!',
  },
  {
    key: 'xxday',
    title: 'xx日期',
    dataType: 'datetime',
    defaultValue: '2017-01-01 11:22:33',
    showInTable: false,
  },
];
