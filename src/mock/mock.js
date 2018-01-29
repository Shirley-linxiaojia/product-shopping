// 拦截ajax请求，生成随机数据

import Mock from 'mockjs'
Mock.mock(/getNewsList/,{
	'list|5':[
		{
			url:'@url',
			title:'@ctitle(5,20)'
		}
	]
})

Mock.mock(/getPrice/, {
	'number|1-100': 100 
})


Mock.mock(/createOrder/, 'number|1-100')

Mock.mock(/getBoardList/, [
        {
          title: '@ctitle(4)',
          description: '@ctitle(8, 12)',
          id: 'car',
          toKey: 'analysis',
          saleout: '@boolean'
        },
        {
          title: '@ctitle(4)',
          description: '@ctitle(8, 12)',
          id: 'earth',
          toKey: 'count',
          saleout: '@boolean'
        },
        {
          title: '@ctitle(4)',
          description: '@ctitle(8, 12)',
          id: 'loud',
          toKey: 'forecast',
          saleout: '@boolean'
        },
        {
          title: '@ctitle(4)',
          description: '@ctitle(8, 12)',
          id: 'hill',
          toKey: 'publish',
          saleout: '@boolean'
        }
])

Mock.mock(/getProductList/, {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            },
            {
              name: '@ctitle(4)',
              url: '@url',
              hot: '@boolean'
            }
          ]
        }
})
Mock.mock(/getTableData/, {
    "total": 25,
    "list|25": [
      {
        "orderId": "@id",
        "product": "@ctitle(4)",
        "version": "@ctitle(3)",
        "period": "@integer(1,5)年",
        "buyNum": "@integer(1,8)",
        "date": "@date()",
        "amount": "@integer(100, 500)元"
      }
    ]
})