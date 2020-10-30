export default {
  pages: [
    'pages/index/index',
    'pages/hot/index',
    'pages/history/index',
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/new-l.png',
      'selectedIconPath': 'resource/new-f.png',
      pagePath: 'pages/index/index',
      text: '每日3+1'
    }, {
      'iconPath': 'resource/hot-l.png',
      'selectedIconPath': 'resource/hot-f.png',
      pagePath: 'pages/hot/index',
      text: '热门题目'
    }, {
      'iconPath': 'resource/history-l.png',
      'selectedIconPath': 'resource/history-f.png',
      pagePath: 'pages/history/index',
      text: '历史题目'
    }
  ],
    'color': '#bfbfbf',
    'selectedColor': '#4e5160',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
