import variables from './variables'

export function useDefault(options = variables) {
  return `
  * {
  box-sizing: border-box;

}
html{
  font-family: "${options.fontName}", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
  overflow-y: overlay;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  overflow-y: overlay;
  overflow-x: hidden;
  scrollbar-color: "${options.colors[0].hash}" transparent;
  margin: 0;
  padding: 0;
}

button {
  font-family: "${options.fontName}", sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}


  `
}
