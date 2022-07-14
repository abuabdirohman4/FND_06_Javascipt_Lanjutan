# Asynchronous Javascript

## Javascript (Beginner)
Bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser. -Wikipedia

## Javascript (Advanced)
is a single **single-thread**, **non-blocking**, **asynchronous** and **concurrent** language. -latentflip.com

### **Single Threaded** Vs Multi Threaded
    Single Threaded
    thread 1 : task 1 -> task 2 -> task 3

    Multi Threaded
    thread 1 : task 1                   task 4
    thread 2 :          task 2
    thread 3 :                  task 3
### Blocking Vs **Non Blocking**
    Blocking
    task 1 (wait) [wait done] -> task 2 

    Non Blocking
    task 1 (wait) [still wait -> task 2

### Synchronous Vs **Asynchronous**
    Synchronous
    task 1 -> task 2 -> task 3 -> task 4

    Asynchronous
    task 1 (process) -> task 2 (process) -> task 1 (done)-> task 2 (done)
    Asynchronous + Single Threaded
    
    thread 1 : task 1 task 4
    thread 2 :    task 2
    thread 3 :       task 3
    Asynchronous + Multi Threaded

### **Concurrent** Vs Parallelism
    Concurrent  = Asynchronous + Single Threaded
    Parallelism = Asynchronous + Multi Threaded