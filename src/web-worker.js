self.addEventListener('message', (event) => {
    const result = event.data * 2; // Example operation
    self.postMessage(result);
});