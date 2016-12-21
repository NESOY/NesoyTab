//Immediately Invoked Function Expression
(function () {
  //https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements/Custom_Elements_with_Classes
  class DigitalClock extends HTMLElement {
        // Fires when an instance was inserted into the document.
        attachedCallback() {
          this.innerHTML = this.getTime();
        }
        getTime(){
          let now = new Date();
          let hour = now.getHours();
          let min = now.getMinutes();
          let sec = now.getSeconds();
          return `
        <span class="time-number">${hour}</span>
        <span class="time-division">:</span>
        <span class="time-number">${min}</span>
        <span class="time-division">:</span>
        <span>${sec}</span>`;
        }
  }

  document.registerElement('digital-clock', DigitalClock);
})();
