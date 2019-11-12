import { message } from 'ant-design-vue/es'
// import defaultSettings from '../defaultSettings';

let lessNodesAppended

const updateTheme = themeObj => {
  // Don't compile less in production!
  /* if (process.env.NODE_ENV === 'production') {
    return;
  } */
  // Determine if the component is remounted
  if (!themeObj) {
    return
  }
  const hideMessage = message.loading('正在编译主题！', 0)
  function buildIt () {
    if (!window.less) {
      return
    }
    setTimeout(() => {
      window.less
        .modifyVars({ themeObj })
        .then(() => {
          console.log(themeObj)
          hideMessage()
        })
        .catch(() => {
          message.error('Failed to update theme')
          hideMessage()
        })
    }, 200)
  }
  if (!lessNodesAppended) {
    // insert less.js and color.less
    const lessStyleNode = document.createElement('link')
    const lessConfigNode = document.createElement('script')
    const lessScriptNode = document.createElement('script')
    lessStyleNode.setAttribute('rel', 'stylesheet/less')
    lessStyleNode.setAttribute('href', '/color.less')
    lessConfigNode.innerHTML = `
      window.less = {
        async: true,
        env: 'production',
        javascriptEnabled: true
      };
    `
    lessScriptNode.src = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js'
    lessScriptNode.async = true
    lessScriptNode.onload = () => {
      buildIt()
      lessScriptNode.onload = null
    }
    document.body.appendChild(lessStyleNode)
    document.body.appendChild(lessConfigNode)
    document.body.appendChild(lessScriptNode)
    lessNodesAppended = true
  } else {
    buildIt()
  }
}
export { updateTheme }
