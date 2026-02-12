export function initWorker() {
  if (typeof Worker !== 'undefined') {
    const worker = new Worker(new URL('./web-worker.js', import.meta.url));
    worker.postMessage(10);
    worker.onmessage = (event) => {
      console.log('Result from worker:', event.data);
    };
  }
}