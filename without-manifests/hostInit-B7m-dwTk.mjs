const i = import("./remoteEntry.js");
Promise.resolve(i).then((e) => Promise.resolve(e.__tla).then(e.init).catch(e.init));
