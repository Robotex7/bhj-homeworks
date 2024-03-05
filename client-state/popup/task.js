const subscribe = document.getElementById('subscribe-modal');
const modalClose = subscribe.querySelector('.modal__close');
if (modalClose) {
  modalClose.addEventListener('click', addCookie)
};


window.addEventListener('load', () => {
  const getCokie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2){
      return parts
          .pop()
          .split(";")
          .shift();
    };
  };
  
  const status = getCokie("subscribe");
  if (status !== "close") {
    subscribe.classList.add('modal_active');
  } else {
    subscribe.classList.remove('modal_active');
  };
});

function addCookie() {
  console.log(document.cookie);
  subscribe.classList.remove('modal_active');
  document.cookie = 'subscribe=close';
  console.log(document.cookie);
};