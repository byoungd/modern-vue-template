import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 发送数据
window.microApp?.dispatch({ from: '来自微应用react17的数据' + +new Date() })

function mount() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )

  console.log('微应用react17渲染来了 -- 来自umd-mount')
}

function unmount() {
  console.log('微应用react17卸载了 -- 来自umd-unmount')
  // 卸载应用
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
