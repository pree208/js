const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//EVENTS
//CLICK
//clearBtn.addEventListener('click', runEvent);
//DOUBLE CLICK
// clearBtn.addEventListener('dblclick', runEvent);
//MOUSEUP
//clearBtn.addEventListener('mouseup', runEvent);
//MOUSEDown
//clearBtn.addEventListener('mousedown', runEvent);
//MOUSEENTER
// card.addEventListener('mouseenter', runEvent);//inside the card mouseenter
//MOUSELEAVE
// card.addEventListener('mouseleave', runEvent);//outside the card mouse leave
//MOUSEOVER
// card.addEventListener('mouseover', runEvent);//inside card elements mouse over 
//MOUSEOUT
// card.addEventListener('mouseout', runEvent);//outside card elements mouseout
//MOUSEMOVE
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`Event type: ${e.type} `);

  heading.textContent = `MOUSEX:${e.offsetX} MOUSEY: ${e.offsetY}`;

  document.body.style.background = `rgb(${e.offsetX} ,${e.offsetY},40)`;

}