import './style/main.css'
import Application from './src/javascript/Application.js'

window.application = new Application({
    $canvas: document.querySelector('.js-canvas'),
    useComposer: true
})
