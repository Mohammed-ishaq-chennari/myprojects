
const drag = document.querySelectorAll('.drag');
const boxing = document.querySelectorAll('.box');

drag.forEach(drag =>{
  drag.addEventListener('dragstart',()=>{
    drag.classList.add('dragging');

  })
  drag.addEventListener('.dragend',()=>{
    drag.classList.remove('dragging');
  })
  boxing.forEach(box =>{
    box.addEventListener('dragover',e=> {
      e.preventDefault();

    });
    box.addEventListener('drop', e=>{
      e.preventDefault();
      const drag = document.querySelector('.dragging');
      box.appendChild(drag)
    })
  })
  
  
})