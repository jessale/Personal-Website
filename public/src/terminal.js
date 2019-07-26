// let terminal = document.createElement("DIV");
// // let title = document.createElement("DIV");
// // title.setAttribute('class', 'ui-draggable-handle title');
// terminal.setAttribute("id", "shell");
// // terminal.style.display ="block !important";
// terminal.setAttribute('class', 'window ui-draggable ui-resizable');
// // terminal.append(title);
// let desktop = document.getElementById("desktop");
// desktop.append(terminal);

function term(test, startup){
    console.log(startup);
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
    function typeConsole(){

        var options = {
            strings: ["<i>First</i> sentence.", "<h1>Welcome!</h1><br>My name is <span style='color:red;'>Flo</span>. I'm a GNU/Linux Admin and Developer from Augsburg, Germany. <br>I enjoy solving challenging problems, learning new things and programming.<br><br>Find out more about me: <ul class='terminal-ul'><li onclick=checkifexists('#explorer',explorer);>Projects</li><li onclick=checkifexists('#cv',cv)>Skills & Resume</li></ul>Or type <span style='color:red;'>'help'</span> into the command prompt for more info<br><br>"],
            typeSpeed: 10,
        };

        var typed = new Typed(".terminal-output" , options);

        // set Timeout because async doesn't work? 
        setTimeout(showCursor, 6000);

        function showCursor(){
            $(".prompt").fadeIn();
            $(".cursor-line").fadeIn();
        }

    }

jQuery(function($, term) {


    option = {
        // onInit: '',
        prompt: "guest@floshodan.io ~:",
        greetings: "floshodan.io console: Version 0.1.0-beta" +
            "\n" + "Copyright (c) 2019 floshodan.io" +
            "\n\n" +
            "Welcome guest. Type <span style='color:red;'>'help'</span>" + " to get a list of commands" +"\n\n",
        width: 650,
    };

    if(startup){
        option.greetings = '';
    }

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
      , option );

    if(startup){
        $(".cursor-line").hide();
        $(".prompt").hide(); 
        typeConsole();
        // console.log(option);

            };

        });

        ;};
