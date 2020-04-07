/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-shadow */
let out = '';
const textarea = '<div class = "textarea"><textarea name = "textarea" rows="8" cols="100" readonly></textarea></div>';
const keyboard = '<div class = "keyboard"></div>';
const marker = '<div class = "OS">Windows</div>'
                    + '<div class = "marker">'
                        + '<div class = "marker-Eng">Английская раскладка</div>'
                        + '<div class = "marker-Rus">Русская раскладка</div>'
                    + '</div>';
const markLanguage = '<div class="language">Переключение языка кавишами Ctrl+Alt</div>';
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', textarea);
body.insertAdjacentHTML('beforeend', keyboard);
body.insertAdjacentHTML('beforeend', markLanguage);
body.insertAdjacentHTML('beforeend', marker);
const eventCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const eventKeyCode = [
  96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
  9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127,
  20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
  16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
  17, 0, 18, 32, 18, 37, 40, 39, 17];
//   ENG
const engKeys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', '|',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const engKeysShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', '/',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const engKeysCapsLock = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', '/',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
//  Rus
const rusKeys = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const rusKeysShift = [
  'Ё', '!', "'", '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', '|',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const rusKeysCapsLock = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', '|',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
// Смена раскладки клавиатуры посредством ctrl+Alt на Eng
function EngCtrlAlt() {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 17) flag = true;
    document.addEventListener('keyup', (event) => {
      if (event.keyCode == 18 && flag && flagLang) {
        if (!capsLock) {
          buttonsEnDown.forEach((el) => el.classList.add('hidden'));
          buttonsEnUp.forEach((el) => el.classList.add('hidden'));
          buttonsRusUp.forEach((el) => el.classList.remove('hidden'));
        } else {
          buttonsEnDown.forEach((el) => el.classList.add('hidden'));
          buttonsEnUp.forEach((el) => el.classList.add('hidden'));
          buttonsRusCapsLockDown.forEach((el) => el.classList.remove('hidden'));
          buttonsEnCapsLockDown.forEach((el) => el.classList.add('hidden'));
        }
        if (event.keyCode == 18 && flag && !flagLang) {
          if (!capsLock) {
            buttonsRusDown.forEach((el) => el.classList.add('hidden'));
            buttonsRusUp.forEach((el) => el.classList.add('hidden'));
            buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
          } else {
            buttonsRusDown.forEach((el) => el.classList.add('hidden'));
            buttonsRusUp.forEach((el) => el.classList.add('hidden'));
            buttonsEnCapsLockDown.forEach((el) => el.classList.remove('hidden'));
            buttonsRusCapsLockDown.forEach((el) => el.classList.add('hidden'));
          }
        }
        flag = false;
        localStorage.setItem('localVariable', false);
        Marker();
      }
    });
  });
}
// ==Смена раскладки клавиатуры посредством ctrl+Alt на Rus===
function RusCtrlAlt() {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 17) flag = true;
    document.addEventListener('keyup', (event) => {
      if (event.keyCode == 18 && flag && !flagLang) {
        if (!capsLock) {
          buttonsRusDown.forEach((el) => el.classList.add('hidden'));
          buttonsRusUp.forEach((el) => el.classList.add('hidden'));
          buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
        } else {
          buttonsRusDown.forEach((el) => el.classList.add('hidden'));
          buttonsRusUp.forEach((el) => el.classList.add('hidden'));
          buttonsEnCapsLockDown.forEach((el) => el.classList.remove('hidden'));
          buttonsRusCapsLockDown.forEach((el) => el.classList.add('hidden'));
        }
        flag = false;
        localStorage.setItem('localVariable', true);
        Marker();
      }
    });
  });
}
//  Создание раскладки клавиатуры
let flagLang;
function Marker() {
  if (localStorage.getItem('localVariable') == 'true') {
    document.querySelector('.marker-Eng').classList.remove('hidden');
    document.querySelector('.marker-Rus').classList.add('hidden');
    flagLang = true;
    EngCtrlAlt();
  } else {
    document.querySelector('.marker-Rus').classList.remove('hidden');
    document.querySelector('.marker-Eng').classList.add('hidden');
    flagLang = false;
    RusCtrlAlt();
  }
}
Marker();
if (flagLang) {
  for (let i = 0; i < 64; i++) {
    out += `<div class="btn ${eventCode[i]}" data = "${eventKeyCode[i]}">`
                      + '<span class="eng">'
                          + `<span class="caseUp">${engKeys[i]}</span>`
                          + `<span class="caseDown hidden">${engKeysShift[i]}</span>`
                          + `<span class="CapsLockDown hidden">${engKeysCapsLock[i]}</span>`
                      + '</span>'
                      + '<span class="rus">'
                          + `<span class="caseUp hidden">${rusKeys[i]}</span>`
                          + `<span class="caseDown hidden">${rusKeysShift[i]}</span>`
                          + `<span class="CapsLockDown hidden">${rusKeysCapsLock[i]}</span>`
                      + '</span>'
                  + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = out;
} else {
  for (let i = 0; i < 64; i++) {
    out += `<div class="btn ${eventCode[i]}" data = "${eventKeyCode[i]}">`
                      + '<span class="eng">'
                          + `<span class="caseUp hidden">${engKeys[i]}</span>`
                          + `<span class="caseDown hidden">${engKeysShift[i]}</span>`
                          + `<span class="CapsLockDown hidden">${engKeysCapsLock[i]}</span>`
                      + '</span>'

                      + '<span class="rus">'
                          + `<span class="caseUp">${rusKeys[i]}</span>`
                          + `<span class="caseDown hidden">${rusKeysShift[i]}</span>`
                          + `<span class="CapsLockDown hidden">${rusKeysCapsLock[i]}</span>`
                      + '</span>'
                  + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = out;
}
const buttonsEnUp = document.querySelectorAll('.keyboard > .btn > .eng > .caseUp');
const buttonsEnDown = document.querySelectorAll('.keyboard > .btn > .eng > .caseDown');
const buttonsEnCapsLockDown = document.querySelectorAll('.keyboard > .btn > .eng > .CapsLockDown');
const buttonsRusUp = document.querySelectorAll('.keyboard > .btn > .rus > .caseUp');
const buttonsRusDown = document.querySelectorAll('.keyboard > .btn > .rus > .caseDown');
const buttonsRusCapsLockDown = document.querySelectorAll('.keyboard > .btn > .rus > .CapsLockDown');
const Text = document.querySelector('textarea');
let flag = false;
let capsLock = false;
let Shift = false;
function OutputSymbols(N) {
  switch (N) {
    case 13:
      Text.value = Text.value.substr(0, Text.value.length - 1);
      break;
    case 29: case 42: case 54: case 55: case 56: case 57: case 59: case 63:
      break;
    case 58:
      Text.value += ' ';
      break;
    case 41:
      Text.value += '\n';
      break;
    case 14:
      Text.value += '   ';
      break;
    default:
      if (flagLang) {
        if (Shift && !capsLock) {
          Text.value += engKeysShift[N];
        } else if (!Shift && !capsLock) {
          Text.value += engKeys[N];
        } if (!Shift && capsLock) {
          Text.value += engKeysCapsLock[N];
        } if (Shift && capsLock) {
          Text.value += engKeys[N];
        }
      } else {
        if (Shift && !capsLock) {
          Text.value += rusKeysShift[N];
        } else if (!Shift && !capsLock) {
          Text.value += rusKeys[N];
        } if (!Shift && capsLock) {
          Text.value += rusKeysCapsLock[N];
        } if (Shift && capsLock) {
          Text.value += rusKeys[N];
        }
      }
  }
}
function OnAnimationPressButton() {
  // eslint-disable-next-line func-names
  document.onkeydown = function (event) {
    event.preventDefault();
    document.querySelector(`.keyboard > .${event.code}`).classList.add('active');
    const B = eventCode.indexOf(event.code);
    OutputSymbols(B);
    // Смена визуала регистра раскладки клавиатуры посредством shift на Eng и RUS
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      Shift = true;
      if (flagLang && !capsLock) {
        buttonsEnUp.forEach((el) => el.classList.add('hidden'));
        buttonsEnDown.forEach((el) => el.classList.remove('hidden'));
      } else if (flagLang && capsLock) {
        buttonsEnCapsLockDown.forEach((el) => el.classList.add('hidden'));
        buttonsEnDown.forEach((el) => el.classList.add('hidden'));
        buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
      } else if (!flagLang && !capsLock) {
        buttonsRusUp.forEach((el) => el.classList.add('hidden'));
        buttonsRusDown.forEach((el) => el.classList.remove('hidden'));
      } else if (!flagLang && capsLock) {
        buttonsRusCapsLockDown.forEach((el) => el.classList.add('hidden'));
        buttonsRusDown.forEach((el) => el.classList.add('hidden'));
        buttonsRusUp.forEach((el) => el.classList.remove('hidden'));
      }
    }
  };
}
// Отмена анимации нажатия на физической клавиатуре
function OffAnimationPressButton() {
  // eslint-disable-next-line func-names
  document.onkeyup = function (event) {
    if (event.keyCode > 7) {
      document.querySelector(`.keyboard > .${event.code}`).classList.remove('active');
      // Смена визуала регистра раскладки клавиатуры shift на Eng И RUS
      if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        Shift = false;
        if (flagLang && !capsLock) {
          buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
          buttonsEnDown.forEach((el) => el.classList.add('hidden'));
        } else if (flagLang && capsLock) {
          buttonsEnCapsLockDown.forEach((el) => el.classList.remove('hidden'));
          buttonsEnUp.forEach((el) => el.classList.add('hidden'));
        } else if (!flagLang && !capsLock) {
          buttonsRusUp.forEach((el) => el.classList.remove('hidden'));
          buttonsRusDown.forEach((el) => el.classList.add('hidden'));
        } else if (!flagLang && capsLock) {
          buttonsRusCapsLockDown.forEach((el) => el.classList.remove('hidden'));
          buttonsRusUp.forEach((el) => el.classList.add('hidden'));
        }
      }
    }
  };
}
// Функционал переключения клавиши CapsLock с применением визуала
function CapsLockControl() {
  document.addEventListener('keydown', (event) => {
    if (event.code == 'CapsLock' && capsLock) {
    	if (flagLang) {
    		buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
    		buttonsEnDown.forEach((el) => el.classList.add('hidden'));
    		buttonsEnCapsLockDown.forEach((el) => el.classList.add('hidden'));
    	} else {
    		buttonsRusUp.forEach((el) => el.classList.remove('hidden'));
    		buttonsRusDown.forEach((el) => el.classList.add('hidden'));
    		buttonsRusCapsLockDown.forEach((el) => el.classList.add('hidden'));
    	}
      capsLock = false;
    } else if (event.code == 'CapsLock' && !capsLock) {
      if (flagLang) {
    		buttonsEnUp.forEach((el) => el.classList.add('hidden'));
    		buttonsEnDown.forEach((el) => el.classList.add('hidden'));
    		buttonsEnCapsLockDown.forEach((el) => el.classList.remove('hidden'));
    	} else {
    		buttonsRusUp.forEach((el) => el.classList.add('hidden'));
    		buttonsRusDown.forEach((el) => el.classList.add('hidden'));
    		buttonsRusCapsLockDown.forEach((el) => el.classList.remove('hidden'));
    	}
      capsLock = true;
    }
  });
}
function ClickMouse() {
  // eslint-disable-next-line func-names
  document.querySelector('.keyboard').onclick = function (event) {
    const A = eventKeyCode.indexOf(Number(event.target.getAttribute('data')));
    OutputSymbols(A);
    if (event.toElement.getAttribute('data') == 20 && capsLock) {
      if (flagLang) {
        buttonsEnUp.forEach((el) => el.classList.remove('hidden'));
        buttonsEnDown.forEach((el) => el.classList.add('hidden'));
        buttonsEnCapsLockDown.forEach((el) => el.classList.add('hidden'));
      } else {
        buttonsRusUp.forEach((el) => el.classList.remove('hidden'));
        buttonsRusDown.forEach((el) => el.classList.add('hidden'));
        buttonsRusCapsLockDown.forEach((el) => el.classList.add('hidden'));
      }
      capsLock = false;
    } else if (event.toElement.getAttribute('data') == 20 && !capsLock) {
      if (flagLang) {
        buttonsEnUp.forEach((el) => el.classList.add('hidden'));
        buttonsEnDown.forEach((el) => el.classList.add('hidden'));
        buttonsEnCapsLockDown.forEach((el) => el.classList.remove('hidden'));
      } else {
        buttonsRusUp.forEach((el) => el.classList.add('hidden'));
        buttonsRusDown.forEach((el) => el.classList.add('hidden'));
        buttonsRusCapsLockDown.forEach((el) => el.classList.remove('hidden'));
      }
      capsLock = true;
    }
    if (event.target.classList != 'keyboard') event.target.classList.add('active');
    setTimeout(TimeOut, 100);
  };
}
function TimeOut() {
  document.querySelectorAll('.keyboard .btn').forEach((el) => {
    el.classList.remove('active');
  });
}
OnAnimationPressButton();
OffAnimationPressButton();
CapsLockControl();
ClickMouse();
