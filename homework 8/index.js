let ladder = {
    step: 0,
    up: function () { 
        this.step++;
        return this;
    },
    down: function () { 
        this.step--;
        return this;
    },
    showStep: function () { 
        console.log(this.step);
        
    }
};
// ladder.up();

// ladder.up();

// ladder.down();

// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1