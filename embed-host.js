const frame = document.querySelector('iframe');
const origin = new URL(frame.src, location.href).origin;

function setFullscreen(active) {
  document.body.classList.toggle('tour-fullscreen', active);
  frame.contentWindow?.postMessage({type:'raindigit-tour-fullscreen-state', active}, origin);
}

addEventListener('message', event => {
  if (event.source !== frame.contentWindow || event.origin !== origin ||
      event.data?.type !== 'raindigit-tour-fullscreen-fallback') return;
  setFullscreen(event.data.action === 'enter');
});
addEventListener('keydown', event => {
  if (event.key === 'Escape') setFullscreen(false);
});
