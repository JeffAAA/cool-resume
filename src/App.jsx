import React, { Component } from 'react'
import ResumeText from './text/resumeText'
import StyleText from './text/styleText'
import Showdown from 'showdown'
import Prism from 'prismjs'
import './App.css'
import REM from './rem'
import _ from 'lodash'
REM()
let converter = new Showdown.Converter();


const CONFIG = [
  {
    nodename: 'style__work__area',
    text: StyleText,
    index: 0
  },
  {
    nodename: 'resume__work__area',
    text: ResumeText,
    index: 0
  }
]


class App extends Component {
  constructor() {
    super();
    this.state = {
      styleText: '',
      domStyleText: '',
      resumeText: '',
      domResumeText: ''
    }
  }
  async componentDidMount() {
    for (let i in CONFIG) {
      await this.readText(CONFIG[i])
    }
  }

  async  readText(config) {
    let { nodename = '', text = '', index = 0 } = config;
    let char = text.slice(index, index + 1);
    if (index > text.length) return;
    await this.wirteChar(nodename, char);
    config.index += 1;
    await this.readText(config);
  }

  wirteChar(...config) {
    return new Promise((resolve) => {
      let [nodename = '', char = ''] = config;
      let state = _.clone(this.state);
      let text = ''
      switch (nodename) {
        case 'style__work__area':
          text = state.styleText += char;
          state.domStyleText = Prism.highlight(text, Prism.languages.css);
          state.styleText = text;
          break;
        case 'resume__work__area':
          text = state.resumeText += char;
          state.resumeText = text;
          state.domResumeText = converter.makeHtml(text);
          break;
        default:
          break;
      }
      var node = document.querySelector(`.${nodename}`);
      if (node) {
        node.scrollTop = node.scrollHeight;
      }
      let interval = 22;
      if (char == "？" || char == "，" || char == '！') {
        interval = 800;
      }
      setTimeout(function () {
        this.setState(state);
        resolve();
      }.bind(this), interval)
    })
  }

  render() {
    let state = this.state;
    return (
      <div className="App">
        <div className="style__work__area" ref={(node) => { this.styleWorkAreaNode = node }}>
          <div dangerouslySetInnerHTML={{ __html: state.domStyleText }}></div>
          <style dangerouslySetInnerHTML={{ __html: state.styleText }}></style>
        </div>
        <div className="resume__work__area" ref={(node) => { this.resumeWorkAreaNode = node }}>
          <div dangerouslySetInnerHTML={{ __html: state.resumeText }}></div>
        </div>
      </div>
    )
  }
}

export default App;
