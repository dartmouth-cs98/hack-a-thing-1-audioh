# Audioh 🔊
A small socketIO application for chat and an Electron app to interact with your webcam!

## Motivation 🏃🏾‍♀️
I originally wanted to make an Electron application that would record audio and analyze the source for any material. However, I ran into a lot of issues with that approach. So decided to move forward with interacting with the laptop's webcam. I was able to do that, and I started to play around with different frame rates and taking snapshots.

I realized that Electron was very simple and straight forward and I wanted to play around with something that I've never used. That's where SocketIO comes in.

The Electron app still exists in this project, it's just in an older commit. This is the [version](https://github.com/dartmouth-cs98/hack-a-thing-1-audioh/tree/7dc08643ecddecd6b5101339e03112f08847bf33) that focuses on just Electron.

I decided to expose SocketIO's major capabilities so I decided to make a chat service. This was really interesting because messaging is something that I usually stayed clear of because of the complicated concepts of networking and TCP/UDP connections.

I wanted to include image and audio streaming between different users, so I started with images. However, at this moment, stream images among users doesn't currently work, but is something that I'm interested in completing outside of class.

## Technology 💻
* [Electron](https://electronjs.org) - Framework to build desktop applications
* [SocketIO](https://socket.io/) - TCP connections package

## Guides 📚
* [Socket.io Chat App Websockets](https://www.youtube.com/watch?v=tHbCkikFfDE)
* [Socket.IO Solutions: Broadcasting an Image to Other Sockets | packrpub.com](https://www.youtube.com/watch?v=RCXDlpCorhk)
