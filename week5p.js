class Menu {
    constuctor(side, drink){
        this.side = side;
        this.drink = drink;
    
    }
    describe() {
        return this.side + "with a  " + this.drink + "."
    }
}
class Combo {
    constructor(meal) {
        this.meal = meal;
        this.numbers = [];
    }

    addNumber(number) {
        if (number instanceof Menu){
            this.numbers.push(number);

        } else {
            throw new Error(' Error')
        }
    }

    describe() {
        return this.meal + ' has ' + this.numbers.length + 'Meals'
    }
}

class Options {
    constructor() {
        this.order = []
        this.selectedOrder = null;
    }

start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.chooseMeal();
                break;
            case '2': 
                this.viewMeal();
                break;
            case '3':
                this.deleteMeal();
            case '4':
                this.displayMeal();
            default:
                Selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert ('Goodbye');
}

showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new Meal
    2) view Meal
    3) delete Meal
    4) display Meal
     `);
}

showComboMenuOptions (comboInfo) {
    return prompt (`
    0) back
    1) add side
    2) delete side
    ----------------------
    ${comboInfo}
    `)
}

    displayMeal() {
        let comboString = ' ';
        for(let i = 0; i < this.order.length; i++) {
            comboString += i + ') ' + this.order[i].meal + '\n' ;

        }
        alert(comboString);

    }

    chooseMeal() {
        let meal = prompt('Enter the name of the meal you want: Chicken Sandwich, Or Hamburger');
        this.order.push(new Combo(meal));
    
    }

viewMeal() {
    let index = prompt ('Enter the index of the meal you wish to view');
    if (index > -1 && index < this.order.length) {
        this.selectedOrder = this.order[index];
        let description = 'Order: ' + this.selectedOrder.meal + '\n';
                
        for (let i = 0; i < this.selectedOrder.numbers.length; i++) {
            description += i + ') ' + this.selectedOrder.meal.side + ' - ' + this.selectedOrder.numbers[i].drink + '\n';
                }

                let selection = this.showComboMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.createNumber();
                        break;
                    case '2':
                        this.deleteNumber();
                        }
            }
}


createNumber() {
    let side = prompt ( 'Enter the side you want: Fries or Onion Rings');
    prompt(side)
     let drink = prompt (' Enter the drink you want: Coke or Sprite');
     prompt(side)
    this.selectedOrder.numbers.push(new Menu(side, drink));
    prompt(side)
    
}

deleteNumber() {
    let index = prompt('Enter the side you want to delete:');
    if(index > -1 && index < this.selectedOrder.meal.length) {
        this.selectedOrder.numbers.splice(index, 1);
         }
    }
    
}


let menu = new Options();
    menu.start();