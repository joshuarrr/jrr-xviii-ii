// extracted into a separate module so it's easier to mock with Jest
function getWindowHeight() {
  return window.innerHeight;
}

export default getWindowHeight;
