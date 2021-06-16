class Form {
    constructor() {

    }

    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130, 0);

        var greeting = createElement('h3');

        var input = createInput("Name")
        input.position(130, 160);

        var button = createButton("PLay");
        button.position(250, 200);


        button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        greeting.html("Hello "+name);
        greeting.position(130,160);
        


        })

    }
}

