function Clock(options) {
    let element = options.element;

    this.$hours = element.querySelector('.hours');
    this.$minutes = element.querySelector('.minutes');
    this.$seconds = element.querySelector('.seconds');

    this.timer=undefined;

    let start = this.start.bind(this);
    let stop = this.stop.bind(this);

    element.querySelector('.start').addEventListener('click', start);
    element.querySelector('.stop').addEventListener('click', stop);
}

Clock.prototype.setTime = function() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) {hours = '0' + hours};
    this.$hours.innerHTML = hours.toString();

    let minutes = date.getMinutes();
    if (minutes < 10) {minutes = '0' + minutes};
    this.$minutes.innerHTML = minutes.toString();

    let seconds = date.getSeconds();
    if (seconds < 10) {seconds = '0' + seconds};
    this.$seconds.innerHTML = seconds.toString();
};

Clock.prototype.start = function() {
    if (!this.timer){
        this.setTime();
        this.timer = setInterval(() =>{
            this.setTime();
        }, 1000);
    }
};

Clock.prototype.stop = function() {
    clearInterval(this.timer);
    this.timer=undefined;
};

let clockOptions = { element: document.querySelector('.clock') };
let myClock = new Clock(clockOptions);
myClock.start();