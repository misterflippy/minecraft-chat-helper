# minecraft-chat-helper
Helper function to send chat messages in Minecraft Bedrock

This was designed to be used with the [Minecraft addon toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain).

## Installing
1. Add a dependency to package.json:
```
"dependencies": {
    "minecraft-chat-helper": "misterflippy/minecraft-chat-helper"
  }
```

2. Update node modules:
```
npm install
```

3. Make sure the [Browserify module is installed to the toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain/blob/master/packages/minecraft-addon-toolchain-browserify/README.md)

## Usage
1. Require the module and pass the server or client system object as a parameter:
```
var chat = require("minecraft-chat-helper")(clientSystem);
```

2. Call the function with the message you want to send to chat:
```
chat("Hello from the client script");
```

3. Build/install via the toolchain as usual

## Full example
```
var clientSystem = client.registerSystem(0, 0);

var chat = require("minecraft-chat-helper")(clientSystem);

// Setup which events to listen for
clientSystem.initialize = function () {
  // set up your listenToEvents and register client-side components here.

    clientSystem.listenForEvent("minecraft:client_entered_world", eventData => this.onClientEnteredWorld(eventData));
}

clientSystem.onClientEnteredWorld = function (eventData) {
    chat("Hello from the client script");
}
```
