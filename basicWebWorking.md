1. An HTML file is served from a web server.
2. The browser begins parsing the HTML file. During this process, the preload scanner downloads images, JavaScript files, and other resources without blocking the main thread.
   - Read more about web workers for parallel execution.
3. While parsing the HTML, the browser constructs the DOM (Document Object Model) tree.
4. After constructing the DOM tree, the browser constructs the CSSOM (CSS Object Model) tree.
5. Once both the DOM and CSSOM are constructed, the browser creates the render tree, which is used to paint the meaningful first paint on the screen.
   - Note that painting on the screen does not mean the user can start interacting (scrolling, clicking, etc.) immediately.
6. Time to Interactive (TTI) is the time taken from sending the request to the point where the user can start interacting with the page.

### Terms to Understand

- **Latency**: The total time taken to get a response from the server.
- **Throughput**: The total number of packets transferred within a span of time.
- **Bandwidth**: The capacity of a network to transfer data packets.
- **Time to First Byte (TTFB)**: The total time taken to receive the first byte of data from the server (typically, the first 14 KB can be transferred).


