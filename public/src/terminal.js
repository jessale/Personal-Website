// let terminal = document.createElement("DIV");
// // let title = document.createElement("DIV");
// // title.setAttribute('class', 'ui-draggable-handle title');
// terminal.setAttribute("id", "shell");
// // terminal.style.display ="block !important";
// terminal.setAttribute('class', 'window ui-draggable ui-resizable');
// // terminal.append(title);
// let desktop = document.getElementById("desktop");
// desktop.append(terminal);

function term(test){
    $( function drag() {
        $( ".window-term" ).draggable({cursor: "move", handle : ".title-term", iframeFix: true, stack: ".window"}).resizable();
    } );

    let terminal = document.createElement("DIV");

    terminal.innerHTML = `<div class="window-term" style="z-index : ${test}">\
<div class="title-term">\
<div class="chrome-close title-right" id="closew">\
    <a id="minimize" onclick="minimizeWindow(this)"><i class="fas fa-minus"></i></a>\
    <a href="#"><i class="far fa-window-restore"></i></a>\
    <a id="close" onclick="closeWindow(this, '.terms')" ><i class="fas fa-times"></i></a>\
</div>\
</div> \
       \
<div class ="panel-term" id="terminal" style="overflow: hidden!important;"> <hr />\
</div> `;


    $("#desktop").append(terminal);
    $(".tasks").append(`<div id='task' onclick='toFront(".window-term")' class='terms'><p class='task_text'><span>Terminal</span></p></div>`);


    // $("#close").click(function() {
    //     $("#terminal").remove();
    //     $(".window-term").remove();
    //     $("#task").remove();
    
jQuery(function($, term) {

    $('#terminal').terminal(function(command, term) {
 commands = command.split(/[ ]+/);

        switch(commands[0]) {
            case 'help':
            let help = "\n whois" +
                "\n about";
            term.echo(help);
            break;

            case 'whois':
            var whois = "Name: \t\t\t Florian Schneller\n" +
                "Email: \t\t\t code@floshodan.io\n" +
                "Location: \t\t 127.0.0.1\n" +
                "Homepage: \t\t http://floshodan.io \n";
                term.echo(whois);
                break;
            case 'about': 
                var about = "{{ about.long_description  }}";
                term.echo(about);
                break;
            default: 
                term.echo("unknown command " + command);
            }
        }
      , {
        prompt: 'guest@floshodan.io:~$ ',
        greetings: "floshodan.io console: Version 0.1.0-beta" +
            "\n" + "Copyright (c) 2019 floshodan.io" +
            "\n\n" +
            "Welcome guest. Type " + `help` + " to get a list of commands" +"\n\n",
        width: 650,
    });
});


    ;};
