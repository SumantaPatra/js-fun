//architecture of node js

nodejs
 1. v8
 2. libuv(Event loop, Thread pool)

 // all cpu extensive task are put into the the thred(by default 4/ can change asiinging the value to process.env.THREAD_POOL_SIZE)

 // cpu expensive task (crypto,file compression etc)

 //  all incoming request handled by eventloop(single thread) if the incoming request is cpu extensive work put into the available thread
