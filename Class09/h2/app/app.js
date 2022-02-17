$(document).ready(function () {
  let textInput = $("#textField");
  let colorInput = $("#colorInput");
  let mainButton = $("#btn");
  let headerTitle = $("#contentItem");

  mainButton.click(function () {
    if (textInput.val() === "") {
      alert("You MUST enter some text!");
      return;
    }
    headerTitle
      .text(`Hello there Citizens of ${textInput.val()}`)
      .css("color", $(colorInput).val());
  });
});
