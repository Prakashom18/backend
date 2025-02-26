const fs = require("fs");
// fs.writeFile("Hey.txt", "hello how are you", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });
// fs.rename("hey.txt", "new.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.writeFile("copy.txt", "", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.copyFile("new.txt", "copy.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.writeFile("copy1.txt", "", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.unlink("copy1.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("removed");
// });

// fs.rm("../copy", { recursive: true }, function (err) {
//   if (err) console.error(err);
//   else console.log("removed directory");
// });

fs.readFile("new.txt", "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
