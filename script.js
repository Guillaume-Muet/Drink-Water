document.addEventListener('DOMContentLoaded', () => {

    let small_bottles = document.querySelectorAll('.small-bottle');
    let percentage = 0;
    let percentage_big_bottle = document.querySelector('.percentage');
    let big_bottle = document.querySelector('.big-bottle');

    for(let i = 0; i < small_bottles.length; i++) {
        small_bottles[i].addEventListener('click', () => {
            if(small_bottles[i].classList.contains('small-bottle-full')) {
                small_bottles[i].classList.remove('small-bottle-full');
                small_bottles[i].firstElementChild.style.color = '#0d9aec';
                percentage -= 30;
                switch(percentage) {
                    case 0: 
                        percentage_big_bottle.style.height = '0px';
                        percentage_big_bottle.firstChild.textContent = '';
                        break;
                    case 30:
                        percentage_big_bottle.style.height = '30px';
                        percentage_big_bottle.firstChild.textContent = '0.25 L';
                        break;
                    case 60: 
                        percentage_big_bottle.style.height = '60px';
                        percentage_big_bottle.firstChild.textContent = '0.5 L';
                        break;
                    case 90: 
                        percentage_big_bottle.style.height = '90px';
                        percentage_big_bottle.firstChild.textContent = '0.75 L';
                        break;
                    case 120:
                        percentage_big_bottle.style.height = '120px'; 
                        percentage_big_bottle.firstChild.textContent = '1 L';
                        break;
                    case 150:
                        percentage_big_bottle.style.height = '150px'; 
                        percentage_big_bottle.firstChild.textContent = '1.25 L';
                        break;
                    case 180:
                        percentage_big_bottle.style.height = '180px'; 
                        percentage_big_bottle.firstChild.textContent = '1.5 L';
                        break;
                    case 210:
                        percentage_big_bottle.style.height = '210px'; 
                        percentage_big_bottle.firstChild.textContent = '1.75 L';
                        break;
                    case 240:
                        percentage_big_bottle.style.height = '240px'; 
                        percentage_big_bottle.firstChild.textContent = 'Bottle full';
                        big_bottle.classList.add('big-bottle-animation');
                        big_bottle.animate([
                            // keyframes
                            { transform: 'rotateZ(20deg)',
                              transform: 'rotateZ(-20deg)'
                            }
                          ], {
                            // timing options
                            duration: 600,
                            iterations: 3
                          });
                        break;
                }
            } else {
                small_bottles[i].classList.add('small-bottle-full');
                small_bottles[i].firstElementChild.style.color = 'white';
                percentage_big_bottle.style.height = '30px';
                percentage += 30;
                switch(percentage) {
                    case 0: 
                        percentage_big_bottle.style.height = '0px';
                        percentage_big_bottle.firstChild.textContent = '';
                        break;
                    case 30:
                        percentage_big_bottle.style.height = '30px';
                        percentage_big_bottle.firstChild.textContent = '0.25 L';
                        break;
                    case 60: 
                        percentage_big_bottle.style.height = '60px';
                        percentage_big_bottle.firstChild.textContent = '0.5 L';
                        break;
                    case 90: 
                        percentage_big_bottle.style.height = '90px';
                        percentage_big_bottle.firstChild.textContent = '0.75 L';
                        break;
                    case 120:
                        percentage_big_bottle.style.height = '120px'; 
                        percentage_big_bottle.firstChild.textContent = '1 L';
                        break;
                    case 150:
                        percentage_big_bottle.style.height = '150px'; 
                        percentage_big_bottle.firstChild.textContent = '1.25 L';
                        break;
                    case 180:
                        percentage_big_bottle.style.height = '180px'; 
                        percentage_big_bottle.firstChild.textContent = '1.5 L';
                        break;
                    case 210:
                        percentage_big_bottle.style.height = '210px'; 
                        percentage_big_bottle.firstChild.textContent = '1.75 L';
                        break;
                    case 240:
                        percentage_big_bottle.style.height = '240px'; 
                        percentage_big_bottle.firstChild.textContent = 'Bottle full';
                        big_bottle.animate([
                            // keyframes
                            { transform: 'rotateZ(20deg)',
                              transform: 'rotateZ(-20deg)'
                            }
                          ], {
                            // timing options
                            duration: 600,
                            iterations: 3
                          });
                        break;
                }
            }
        });
    }

});