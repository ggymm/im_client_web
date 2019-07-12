import { ipcRenderer, shell } from 'electron'

const winControl = {
  openPath: function(path) {
    shell.openItem(path)
  },
  openURL: function(url) {
    shell.openExternal(url)
  },
  min: function() {
    ipcRenderer.send('min')
  },
  max: function() {
    ipcRenderer.send('max')
  },
  close: function() {
    ipcRenderer.send('close')
  }
}
export default winControl
