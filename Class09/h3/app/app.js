$(document).ready(function () {
  let div = $("#main");
  let btn = $("#btn");

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function (result) {
      console.log(result);
      btn.click(function () {
        for (let item of result) {
          div.append(
            `<ul><li>ID# ${item.id}<br>Title:${item.title}<br>Completed:"${
              item.completed ? "Completed" : "Not Completed"
            }"</li></ul>`
          );
        }
      });
    },
    error: function (err) {
      console.log(err);
    },
  });
});
