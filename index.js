

//system: the minecract scripting server or client system calling this code
//message: the message to display to chat
module.exports = function (system) {
    return function (message) {
        const eventData = system.createEventData("minecraft:display_chat_event");
        eventData.data.message = message;
        system.broadcastEvent("minecraft:display_chat_event", eventData);
    }
}