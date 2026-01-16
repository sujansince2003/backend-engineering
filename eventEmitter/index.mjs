import eventEmitter from "events";

const event = new eventEmitter();

event.on("clicking", (param1, param2, param3) => {
  console.log("some event happended" + param1 + param2 + param3);
});

event.emit("clicking", "sujan", "is coding", true);
