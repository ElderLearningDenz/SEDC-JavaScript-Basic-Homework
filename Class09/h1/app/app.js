$(document).ready(function(){
    let myDiv = document.createElement("div");
    $(myDiv).attr("id", "divOne").appendTo("body");
    let greetingsHeader = document.createElement("h1");
    $(greetingsHeader).attr("id", "headerOne").appendTo("#divOne");
    let inputText = document.createElement("input");
    $(inputText).attr({type:"text",
        id:"typeText",placeholder:"Please Enter Text:"}).appendTo("#divOne");
    let mainButton = document.createElement("button");
    $(mainButton).attr("id", "btn").appendTo("#divOne").text("Click Me!");
    
    $(mainButton).click(function(){
        $(greetingsHeader).text(`The Force is Strong in ${$(inputText).val()}. We can finally make it.`);
    });
});