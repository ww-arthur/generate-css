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

header {
  position:relative;
  z-index:10
}
a:-webkit-any-link {
  color: inherit;
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-thickness: none;
  text-decoration-style: none;
  text-decoration-color: none;
}
input {
  outline: none;
  appearance: none;
  background-color: transparent;
  border-style: none;
  font: inherit;
  color: currentColor;
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px;
  max-width: 100%;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    margin-bottom: 15px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #555555;
    background-size: cover;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #666666;
    background-size: cover;
  }

  .transition {
    transition: all 0.25s ease-in;
  }
  `
}
