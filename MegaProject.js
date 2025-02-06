window.onload = () => {
    const langLocalIndex = localStorage.getItem('megaSiteLang' || 0);
    globalData.data.langIndex = langLocalIndex;
    loadUpdateLanguage(langLocalIndex, false);
    if(Object.keys(localStorage).includes('MegaSiteIn')) {
        setting.style.display = 'block';
        signButton.firstElementChild.innerText = 'Sign out';
        setTimeout(() => {
            signBtnBlock.firstElementChild.style.display = 'none';
            signBtnBlock.lastElementChild.style.display = null; 
        }, 400);
    }
}

const loadUpdateLanguage = (index, bool) => {
    [...listMenu.children].forEach((item, i) => {
        bool ? item.firstElementChild.style.opacity = 1: ''; 
        item.firstElementChild.innerText = globalData.language[index].nav[i];
    });
    [...allSearch.children].forEach((item, i) => {
        bool ? item.style.opacity = 1: '';
        item.innerText = globalData.language[globalData.data.langIndex].searchList[i];
    });
    bool ? title.style.opacity = 1: '';
    title.innerText = globalData.language[index].title;
    bool ? productTitle.style.opacity = 1: '';
    productTitle.innerText = globalData.language[index].productTitle;
    [...products.children].forEach((item, i) => {
        bool ? item.firstElementChild.children[1].style.opacity = 1: '';
        item.firstElementChild.children[1].innerText = globalData.language[index].searchList[i];
        bool ? item.firstElementChild.children[2].style.opacity = 1: '';
        item.firstElementChild.children[2].innerText = globalData.language[index].price[i];
        bool ? item.firstElementChild.children[4].style.opacity = 1: '';
        item.firstElementChild.children[4].innerText = globalData.language[index].cardText;
    });
    globalTotal.innerText = globalData.language[index].total + ' - ' + globalData.data.globalTotal + globalData.language[index].value;
    bool ? newAlertButton.style.opacity = 1: '';
    newAlertButton.innerText = globalData.language[index].sign.ok;
    bool ? newAlertInfo.style.opacity = 1: '';
    if(globalData.data.alertVariant == 0) {
        newAlertInfo.innerText = globalData.language[index].sign.fill;
    } else if(globalData.data.alertVariant == 1) {
        newAlertInfo.innerText = globalData.language[index].sign.symbol;
    } else if(globalData.data.alertVariant == 2) {
        newAlertInfo.innerText = globalData.language[index].sign.incorrect;
    }
    bool ? signBtnBlock.firstElementChild.style.opacity = 1: '';
    bool ? signBtnBlock.lastElementChild.style.opacity = 1: '';
    signBtnBlock.firstElementChild.innerText = globalData.language[index].sign.sign;
    signBtnBlock.lastElementChild.innerText = globalData.language[globalData.data.langIndex].sign.change;
    signMiniBlock.children[1].placeholder = globalData.language[globalData.data.langIndex].sign.log;
    signMiniBlock.children[3].placeholder = globalData.language[globalData.data.langIndex].sign.pwd;
    signMiniBlock.children[2].placeholder = globalData.language[globalData.data.langIndex].sign.log + ' ' + globalData.language[globalData.data.langIndex].sign.conf;
    signMiniBlock.children[4].placeholder = globalData.language[globalData.data.langIndex].sign.pwd + ' ' + globalData.language[globalData.data.langIndex].sign.conf;

    bool ? signMiniBlock.children[1].style.opacity = 1 : '';
    [...signMiniBlock.children].forEach((item) => {
        if(item.tagName == 'INPUT') {
            item.classList.remove('changeLangInp');
        }
    });
    bool ? exitSignInfo.style.opacity = 1: '';
    exitSignInfo.innerText = globalData.language[index].sign.exit["going out"];
    bool ? [...exitSignBtnBlock.children].forEach(item => item.style.opacity = 1): '';
    exitSignBtnBlock.firstElementChild.innerText = globalData.language[index].sign.exit.yes;
    exitSignBtnBlock.firstElementChild.nextElementSibling.innerText = globalData.language[index].sign.exit.no;
}
// const c = x => {
//     return document.createElement(x);
// }
// console.log(c('h1'))
const c = x => document.createElement(x); // sa aftomat grum e return arjeqy  // sa arvum e vorpeszi anyndhat chgrenq document.createElement()



const globalData = Object.freeze({
    language: Object.freeze([
        {
            nav: ['Home', 'Product', 'Videos', 'Feedback', 'About us'],
            search: 'Search...',
            searchList: [
                'Shoe adidas',
                'Shoe nike',
                'Shoe puma',
                'Shoe reebok',
                'Shoe gucci',
                'Shoe metro',
                'Shoe fils',
                'Shoe dior',
                'Shoe lacoste',
            ],
            title: 'Shoe',
            productTitle: 'Products',
            price: [
                '30$',
                '20$',
                '70$',
                '50$',
                '40$',
                '60$',
                '45$',
                '35$',
                '25$',
            ],
            cardText: `Add To Cart`,
            quant: 'Quantity',
            total: 'Total',
            value: '$',
            sign: {
                fill: 'Fill in the fields',
                symbol: 'Minimum 6 symbol',
                ok: 'ok',
                sign: 'Sign',
                incorrect: 'The data is incorrect',
                exit: {
                    "going out": 'Are you going out?',
                    yes: 'Yes',
                    no: 'No',
                },
                log: 'Login',
                pwd: 'Password',
                conf: 'Confirm',
                change: 'Change Base',
            },
        },
        {
            nav: ['Գլխավոր', 'Արտադրանք', 'Տեսանյութեր', 'Հետադարձ կապ', 'Մեր մասին'],
            search: 'որոնում...',
            searchList: [
                'Կոշիկ adidas',
                'Կոշիկ nike',
                'Կոշիկ puma',
                'Կոշիկ reebok',
                'Կոշիկ gucci',
                'Կոշիկ metro',
                'Կոշիկ fils',
                'Կոշիկ dior',
                'Կոշիկ lacoste',
            ],
            title: 'Կոշիկ',
            productTitle: 'Ապրանքներ',
            price: [
                '1100դր',
                '8000դր',
                '28000դր',
                '20000դր',
                '16000դր',
                '24000դր',
                '18000դր',
                '14000դր',
                '10000դր',
            ],
            cardText: `Ավելացնել զամբյուղի մեջ`,
            quant: 'Քանակ',
            total: 'Ընդամենը',
            value: 'դր',
            sign: {
                fill: 'Լրացրեք դաշտերը',
                symbol: 'Նվազագույնը 6 նիշ',
                ok: 'լավ',
                sign: 'Մուտք',
                incorrect: 'Տվյալները սխալ են',
                exit: {
                    "going out": 'Դո՞ւրս եք գալիս?',
                    yes: 'Այո',
                    no: 'Ոչ',
                },
                log: 'Մուտք գործել',
                pwd: 'Գաղտնաբառ',
                conf: 'Հաստատել',
                change: 'Փոխել բազան',
            },  
        },
        {
            nav: ['главный', 'Продукт', 'Видео', 'Обратная связь', 'О нас'],
            search: 'поиск...',
            searchList: [
                'Чистка adidas',
                'Чистка adidas',
                'Чистка adidas',
                'Чистка adidas',
                'Чистка adidas',
                'Чистка adidas',
                'Чистка adidas',
                'Чистка dior',
                'Чистка lacoste',
            ],
            title: 'Чистка',
            productTitle: 'Продукты', 
            price: [
                '3300руб',
                '2200руб',
                '8000руб',
                '5500руб',
                '4400руб',
                '6600руб',
                '5000руб',
                '4000руб',
                '2700руб',
            ],
            cardText: `Добавить в корзину`,
            quant: 'Количество',
            total: 'Общий',
            value: 'руб',
            sign: {
                fill: 'Заполните поля',
                symbol: 'Минимум 6 символов',
                ok: 'хорошо',
                sign: 'Bойти',
                incorrect: 'Данные неверны',
                exit: {
                    "going out": 'Ты выходишь?',
                    yes: 'Да',
                    no: 'Нет',
                },
                log: 'Авторизоваться',
                pwd: 'Пароль',
                conf: 'Подтверждать',
                change: 'Изменить базу',
            },
        },
    ]),

    href: ['MegaProject.html', '#', '#', '#' ,'#'],
    slider: [
        '../Mega Project/sliderImg/1.jpg',
        '../Mega Project/sliderImg/2.jpg',
        '../Mega Project/sliderImg/3.jpg',
        '../Mega Project/sliderImg/4.jpg',
        '../Mega Project/sliderImg/5.jpg',
        '../Mega Project/sliderImg/1.jpg',
    ],

    productImage: [
        [
            '../Mega Project/ProductImage/1.jpg',
            '../Mega Project/ProductImage/2.jpg',
            '../Mega Project/ProductImage/3.jpg'
        ],
        [
            '../Mega Project/ProductImage/4.jpg',
            '../Mega Project/ProductImage/5.jpg',
            '../Mega Project/ProductImage/6.jpg'
        ],
        [
            '../Mega Project/ProductImage/7.jpg',
            '../Mega Project/ProductImage/8.jpg',
            '../Mega Project/ProductImage/9.jpg'
        ],
        [
            '../Mega Project/ProductImage/10.jpg',
            '../Mega Project/ProductImage/11.jpg',
            '../Mega Project/ProductImage/12.jpg'
        ],
        [
            '../Mega Project/ProductImage/13.jpg',
            '../Mega Project/ProductImage/14.jpg',
            '../Mega Project/ProductImage/15.jpg'
        ],
        [
            '../Mega Project/ProductImage/16.jpg',
            '../Mega Project/ProductImage/17.jpg',
            '../Mega Project/ProductImage/18.jpg'
        ],
        [
            '../Mega Project/ProductImage/19.jpg',
            '../Mega Project/ProductImage/20.jpg',
            '../Mega Project/ProductImage/21.jpg'
        ],
        [
            '../Mega Project/ProductImage/22.jpg',
            '../Mega Project/ProductImage/23.jpg',
            '../Mega Project/ProductImage/24.jpg'
        ],
        [
            '../Mega Project/ProductImage/25.jpg',
            '../Mega Project/ProductImage/26.jpg',
            '../Mega Project/ProductImage/27.jpg'
        ],
    ],
    flafFace: [
        'url("../Mega Project/Project Image/USA.jpg") no-repeat center / cover',
        'linear-gradient(#f00 33.3%, #00f 33.3% 66.6%, #fa0 66.6%)',
        'linear-gradient(#fff 33.3%, #00f 33.3% 66.6%, #f00 66.6%)',
    ],
    cloneData: [],
    data: Object.seal({
        langIndex: 0,
        placeholder: 0,
        serchBoolDown: false,
        downCur: -1,
        downBool: false,
        sliderCur: -100,
        radioCur: 0,
        sliderBool: true,
        moveBool: false,
        mouseX: undefined,
        perfectListSlider: Object.seal({
            data: [],
            index: null,
            radioCur: 0,
            bool: true,
        }),
        cartIndex: null,
        cartBool: true,
        globalTotal: 0,
        globalData: [],
        signCloseTop: 6,
        alertVariant: null,
        signTrue: true,
    }),
});

// const signData = {
//     user1: {
//         id: 0,
//         name: 'Hovo',
//         surname: 'Vardanyan',
//         login: 'loglog',
//         password: '',
//         point: 20000,
//     },
//     user2: {
//         id: 1,
//         name: 'Lyov',
//         surname: 'Melkonyan',
//         login: 'log2log2',
//         password: '',
//         point: 15000,
//     }
// };

// const arr = [];
// 'pwdpwd'.split('').forEach((item) => {
//     arr.push(item.charCodeAt().toString(2));
// });
// signData.user1.password = arr.join('\\011010\\');

// const arr2 = [];
// 'pwd2pwd2'.split('').forEach((item) => {
//     arr2.push(item.charCodeAt().toString(2));
// });
// signData.user2.password = arr.join('\\011010\\');
// console.log(signData)

// localStorage.setItem('MegaSiteData', JSON.stringify(signData));



const header = c('header');
document.body.insertAdjacentElement('afterbegin', header);

const logo = c('a');
logo.style = `display: inline-block; overflow: hidden;`
header.append(logo);
logo.setAttribute('href', 'MegaProject.html');
logo.setAttribute('target', '_blank');
const logoImg = c('img');
logo.append(logoImg);
logoImg.setAttribute('alt', 'Img');
logoImg.setAttribute('src', '../Mega Project/Project Image/logo.jpg');
logoImg.className = 'logo';

const nav = c('nav');
logo.after(nav);
// nav.style = `display: flex: justify-content: center`
const listMenu = c('ul');
listMenu.style = 'display: flex; list-style: none;'
nav.append(listMenu);

globalData.language[globalData.data.langIndex].nav.forEach((item, index )=> {
    const line = c('li');
    listMenu.append(line);
    line.style = `position: relative; cursor: pointer;`;
    const a = c('a');
    a.innerText = item;
    a.setAttribute('href', globalData.href[index]);
    a.style = `color: #fff; font: bold 21px sans-serif; margin: 0 15px; text-decoration: none; transition: 0.4s;`;

    const decor = c('span');
    decor.style = `position: absolute; top: 100%; left: 10%; width: 80%; height: 2px; background: #fff; transition: scale 0.4s; scale: 0 1; transform-origin: left;`;
    line.onmouseover = () => {
        decor.style.scale = 1;
        decor.style.transformOrigin = `left`;
        a.style.color = `#ff0`;
    }
    line.onmouseleave = () => {
        decor.style.scale = `0 1`;
        decor.style.transformOrigin = `right`;
        a.style.color = `#fff`;
    }
    line.append(a, decor);

});

const signBlock = c('div');
const signButton = c('div');
signBlock.append(signButton);
const signButtonText = c('span');
signButtonText.style.transition = '0.4s';
signButtonText.innerText = 'Sign In';
signButton.style = `font: bold 20px sans-serif; color: #fff; cursor: pointer; position: relative;`;
const signButtonLine = c('i');
signButton.append(signButtonText, signButtonLine);
signButtonLine.style = listMenu.children[0].lastElementChild.getAttribute('style');
signButtonLine.style.width = '100%';
signButtonLine.style.left = 0;
signButton.onmouseover = () => {
    signButtonLine.style.scale = 1;
    signButtonLine.style.transformOrigin = `left`;
    signButton.firstElementChild.style.color = `#0f0`;
};
signButton.onmouseleave = () => {
    signButtonLine.style.scale = '0 1';
    signButtonLine.style.transformOrigin = `righht`;
    signButton.firstElementChild.style.color = null;
};
const signOverlay = c('div');
setTimeout(() => script.before(signOverlay), 1);
signOverlay.style = `position: fixed; inset: 0; background: rgba(0, 0, 0, 0.9); z-index: 11; backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; clip-path: circle(0 at 76% ${globalData.data.signCloseTop}%); transition: 1s`;
const signMiniBlock = c('div');
signOverlay.append(signMiniBlock);
signMiniBlock.style = 'padding: 2vw; background: #fff; border-radius: 2vw; position: relative; translate: 0 50vw; transition: 0.5s;';
const signMiniClose = c('div');
signMiniBlock.append(signMiniClose);
signMiniClose.innerText = 'X';
setTimeout(() => {
    signMiniClose.style = closePerfectListSlider.getAttribute('style');
    signMiniClose.style.top = '-6%';
    signMiniClose.style.userSelect = 'none';
    signMiniClose.onmouseover = () => signMiniClose.style.background = '#222';
    signMiniClose.onmouseleave = () => signMiniClose.style.background = '#f00';
}, 1);


for(let i = 0; i < 4; i++) {
    const singInp = c('input');
    signMiniBlock.append(singInp);
    singInp.style = `display: block; width: 20vw; height: 2.5vw; border: 1px solid #000; border-radius: 1.5vw; margin: 10px 0; font: 20px sans-serif; text-indent: 0.8vw; transition: 0.5s; text-align: center;`;
    singInp.className = 'logPwdInp';
    if(i == 0 || i == 1) {
        singInp.type = 'text';
        singInp.placeholder = globalData.language[globalData.data.langIndex].sign.log;
        if(i == 1) {
            singInp.placeholder = globalData.language[globalData.data.langIndex].sign.log + ' ' + globalData.language[globalData.data.langIndex].sign.conf;
            singInp.style.translate = '0 -3.2vw';
            singInp.style.opacity = 0;
            singInp.style.pointerEvents = 'none';
        }
    } else {
        singInp.type = 'password';
        singInp.placeholder = globalData.language[globalData.data.langIndex].sign.password;
        if(i == 2) {
            singInp.style.margin = '-3.2vw 0';
        }
        if(i == 3) {
            singInp.placeholder = globalData.language[globalData.data.langIndex].sign.pwd + ' ' + globalData.language[globalData.data.langIndex].sign.conf;
            singInp.style.opacity = 0;
            singInp.style.pointerEvents = 'none';
        }
    }
}
const signBtnBlock = c('div');
signMiniBlock.insertAdjacentElement('beforeend', signBtnBlock);
signBtnBlock.style = `display: flex; justify-content: center;`;

const exitSignBlock = c('div');
setTimeout(() => script.before(exitSignBlock), 1);
exitSignBlock.style = `position: fixed; inset: 0; background: rgba(0, 0, 0, 0.98); z-index: 13; backdrop-filter: blur(12px); display: grid; place-items: center; transition: 1s; clip-path: circle(0 at 5% 5%)`;
const exitSignMiniBlock = c('div');
exitSignBlock.append(exitSignMiniBlock);
exitSignMiniBlock.style = `padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 0 20px #fff;`;
const exitSignInfo = c('h6');
exitSignMiniBlock.append(exitSignInfo);
exitSignInfo.style = `font: bold 1.5vw sans-serif; transition: 0.5s;`;
exitSignInfo.innerText = globalData.language[globalData.data.langIndex].sign.exit["going out"];
const exitSignBtnBlock = c('div');
exitSignBtnBlock.style = `text-align: center; margin-top: 15px;`;
exitSignInfo.after(exitSignBtnBlock)

for(let i = 0; i < 2; i++) {
    const exitSignBtn = c('button');
    exitSignBtnBlock.append(exitSignBtn);
    exitSignBtn.style = `padding: 3px 5px; font: 1.3vw sans-serif; cursor: pointer; border-radius: 8px; border: 1px solid #000; margin: 0 5px; transition: 0.4s; background: #fff; box-shadow: inset 0 0 5px #0009;`;
    // exitSignBtn.onmouseover = () => {
    //     if(i == 0) {
    //         exitSignBtn.style.background = '#0f0';
    //     } else {
    //         exitSignBtn.style.background = '#f00';
    //         exitSignBtn.style.color = '#fff';
    //         exitSignBtn.innerText = globalData.language[globalData.data.langIndex].sign.exit.no;
    //     }
    // }
    if(i == 0) {
        exitSignBtn.innerText = globalData.language[globalData.data.langIndex].sign.exit.yes;
        exitSignBtn.onmouseover = () => exitSignBtn.style.background = '#0f0';
        exitSignBtn.onclick = () => {
            localStorage.removeItem('MegaSiteIn');
            location.reload();
        };

    } else {
        exitSignBtn.innerText = globalData.language[globalData.data.langIndex].sign.exit.no;
        exitSignBtn.onmouseover = () => {
            exitSignBtn.style.background = '#f00';
            exitSignBtn.style.color = '#fff';
        }
        exitSignBtn.onclick = () => exitSignBlock.style.clipPath = 'circle(0 at 5% 5%)';
    }
    exitSignBtn.onmouseleave = () => {
        exitSignBtn.style.background = null;
        exitSignBtn.style.color = null; 
    }

    const signBtnMulti = c('btton');
    signBtnBlock.append(signBtnMulti);
    signBtnMulti.style = `padding: 7px 15px; font: bold 18px sans-serif; cursor: pointer; border: 1px solid #000; border-radius: 20px; background: linear-gradient(#b8b8b8, #fff, #b8b8b8); box-shadow: 0 0 5px #0009; transition: 0.5s;`;
    signBtnMulti.onmouseover = () => signBtnMulti.style.background = `linear-gradient(#b8b8b8, #33ff18, #b8b8b8)`;
    signBtnMulti.onmouseleave = () => signBtnMulti.style.background = `linear-gradient(#b8b8b8, #fff, #b8b8b8)`;
    
    if(i == 0) {
        signBtnMulti.innerText = globalData.language[globalData.data.langIndex].sign.sign;
    } else {
        signBtnMulti.innerText = globalData.language[globalData.data.langIndex].sign.change;
        signBtnMulti.style.display = 'none';
    }
}
signButton.onclick = () => {
    if(Object.keys(localStorage).includes('MegaSiteIn')) {
        exitSignBlock.style.clipPath = 'circle(100%)';
    } else {
        signOverlay.style.clipPath = `circle(100%)`;
        setTimeout(() => signMiniBlock.style.translate = null, 500);
    }
}
signMiniClose.onclick = () => {
    setTimeout(() => signOverlay.style.clipPath = `circle(0 at 76% ${globalData.data.signCloseTop}%)`, 100);
    signMiniBlock.style.translate = `0 50vw`;
    signMiniBlock.children[2].style.opacity = 0;
    signMiniBlock.children[2].style.pointerEvents = 'none';
    signMiniBlock.children[2].style.translate = '0 -3.2vw';
    signMiniBlock.children[4].style.opacity = 0;
    signMiniBlock.children[4].style.pointerEvents = 'none';
    signMiniBlock.children[4].style.translate = '0 -3.2vw';
    signMiniBlock.children[3].style.margin = '-3vw 0';
    if(Object.keys(localStorage).includes('MegaSiteIn')) {
        setting.style.display = null;
    }   
}

const newAlertBlock = c('div');
setTimeout(() => script.before(newAlertBlock), 1);
newAlertBlock.style = `position: fixed; inset: 0; background: rgba(0, 0, 0, 0.99); z-index: 12; display: flex; justify-content: center; padding-top: 2vw; clip-path: circle(0 at 50% 0); transition: 1s;`;
const newAlert = c('div');
newAlertBlock.append(newAlert);
newAlert.style = `width: 30vw; height: 9vw; background: #fff; border-radius: 0.7vw; box-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff; padding: 2vw;`;
const newAlertInfo = c('h3');
newAlertInfo.style = 'font: 20px sans-serif; transition: 0.5s;';
const newAlertButtonBlock = c('div');
const newAlertButton = c('button');
newAlertButton.innerText = globalData.language[globalData.data.langIndex].sign.ok;
newAlert.append(newAlertInfo, newAlertButtonBlock);
newAlertButtonBlock.append(newAlertButton);
newAlertButtonBlock.style = 'display: flex; justify-content: flex-end; padding-top: 2.5vw;';
newAlertButton.style = `padding: 5px 10px; font: bold 16px sans-serif; cursor: pointer; border: 1px solid #000; border-radius: 15px; background: #0f0; box-shadow: inset 0 0 5px #0009; user-select: none; transition: 0.5s;`
signBtnBlock.firstElementChild.onclick = () => {
    const inp = signMiniBlock.children;
    if(inp[1].value == '' || inp[3].value == '') {
        newAlertBlock.style.clipPath = `circle(100%)`;
        newAlertInfo.innerText = globalData.language[globalData.data.langIndex].sign.fill;
        globalData.data.alertVariant = 0;
        return; // sa grvum e vorpeszi ete bavararum e araj chgna ev mnacacy chkatari 
    }
    if(inp[1].value.length < 6 || inp[3].value.length < 6) {
        newAlertBlock.style.clipPath = `circle(100%)`;
        newAlertInfo.innerText = globalData.language[globalData.data.langIndex].sign.symbol;
        globalData.data.alertVariant = 1;
        return;
    }

    const myBase = JSON.parse(localStorage.getItem('MegaSiteData'));
    Object.values(myBase).forEach((item, index) => {
        const allBase = item.password.split('\\011010\\');
        let allBase2 = '';
        allBase.forEach(item => allBase2 += String.fromCharCode(parseInt(item, 2)))
        if(inp[1].value == item.login && inp[3].value == allBase2) {
            globalData.data.signTrue = false;
            localStorage.setItem('MegaSiteIn', item.id);
            signButton.firstElementChild.innerText = 'Sign out';

            setTimeout(() => signOverlay.style.clipPath = `circle(0 at 76% ${globalData.data.signCloseTop}%)`, 100);
            signMiniBlock.style.translate = `0 50vw`;
            setting.style.display = 'block';
            inp[1].value = null;
            inp[3].value = null;
            setTimeout(() => {
                signBtnBlock.firstElementChild.style.display = 'none';
                signBtnBlock.lastElementChild.style.display = null; 
            }, 400);
        };
    });
    if(globalData.data.signTrue) {
        newAlertBlock.style.clipPath = `circle(100%)`;
        newAlertInfo.innerText = globalData.language[globalData.data.langIndex].sign.incorrect;
        globalData.data.alertVariant = 2 ;
    }
};
signBtnBlock.lastElementChild.onclick = () => {
    const inp = signMiniBlock.children;
    if(inp[1].value == '' || inp[2].value == '' || inp[3].value == '' || inp[4].value == '') {
        newAlertBlock.style.clipPath = `circle(100%)`;
        newAlertInfo.innerText = globalData.language[globalData.data.langIndex].sign.fill;
        globalData.data.alertVariant = 0;
        return; // sa grvum e vorpeszi ete bavararum e araj chgna ev mnacacy chkatari 
    }
    if(inp[1].value.length < 6 || inp[2].value.length < 6 || inp[3].value.length < 6 || inp[4       ].value.length < 6) {
        newAlertBlock.style.clipPath = `circle(100%)`;
        newAlertInfo.innerText = globalData.language[globalData.data.langIndex].sign.symbol;
        globalData.data.alertVariant = 1;
        return;
    }
};

newAlertButton.onmouseover = function() {
    this.style.background = '#222';
    this.style.color = '#fff';
    this.style.boxShadow = 'inset 0 0 10px #fff9';
}
newAlertButton.onmouseleave = function() {
    this.style.background = '#0f0';
    this.style.color = null;
    this.style.boxShadow = 'inset 0 0 5px #0009';
}
newAlertButton.onclick = () => {
    newAlertBlock.style.clipPath = `circle(0)`;
}

const searchBlock = c('div');
searchBlock.style = `margin-right: 10px; position: relative;`
logo.after(nav, signBlock, searchBlock);
const inp = c('input');
inp.style = `height: 30px; width: 15vw; border-radius: 22px; border: 0; text-indent: 10px; font: bold 16px sans-serif;`;
inp.setAttribute('placeholder', globalData.language[globalData.data.langIndex].search);
inp.setAttribute('type', 'search')
const allSearch = c('div');
searchBlock.append(inp, allSearch);
allSearch.style = `position: absolute; top: 106%; left: 0; width: 100%; background: #fff; box-shadow: 0 3px 12px #0008; border-radius: 22px; overflow: hidden; display: none;`;
globalData.language[globalData.data.langIndex].searchList.forEach((item, index) => {
    const list = c('div');
    allSearch.append(list);
    list.innerText = item;
    list.style = `font: 18px verdana; border-bottom: 1px solid #000; padding: 5px 10px; cursor: pointer; transition: 0.5s`;
    list.onmouseover = () => {
        [...allSearch.children].forEach(item => {
            item.style.background = null;
        });
        list.style.background = '#7fff00';
    }
    list.onmouseleave = () => list.style.background = null;
    list.onclick = () => {
        inp.value = list.innerText;
        allSearch.style.display = 'none';
    }

    const card = c('div');
    card.style = `width: 300px; height: 380px; display: flex; justify-content: center; align-items: center; perspective: 850px`;
    const productItem = c('div');
    card.append(productItem);
    productItem.style = `width: 260px; height: 340px; border: 1px solid #000; border-radius: 15px; box-shadow: 0 3px 5px #0006; position: relative;`;
    card.onmousemove = e => {
        if(e.target.className != 'add') {
            productItem.style.transform = `rotateX(${(-(e.layerY - productItem.offsetHeight / 2) / 14)}deg) rotateY(${(e.layerX - productItem.offsetWidth / 2) / 14}deg)`;
            productItem.style.transition = 'none';
        }

        // console.log(e.layerY);
        // console.log(e.layerX);
    }
    card.onmouseleave = () => {
        productItem.style.transform = null;
        productItem.style.transition = '0.7s';
    }

    const display = c('div');
    productItem.append(display);
    display.style = `height: 200px; border-bottom: 1px solid #000; display: flex; flex-direction: column; justify-content: center; padding-left: 7px; row-gap: 5px; background: url('${globalData.productImage[index][0]}') no-repeat 60px center / contain; transition: background 0.5s; cursor: zoom-in; user-select: none;`;

    globalData.productImage[index].forEach((img, i) => {
        const imgTag = c('img');
        display.append(imgTag);
        imgTag.src = img;
        imgTag.style = `width: 55px; height: 55px; border: 5px solid #0008; object-fit: contain; border-radius: 10px; cursor: pointer; transition: 0.4s`;
        imgTag.onmouseover = () => imgTag.style.borderColor = 'green';
        imgTag.onmouseleave = () => imgTag.style.borderColor = `#0008`;  
        imgTag.onclick = e => {
            e.stopPropagation();
            display.style.backgroundImage = `url('${img}')`;
            globalData.data.perfectListSlider.data[index] = i;
        };
    });
    productItem.onmouseleave = () => {
        [...products.children].forEach(item => {
            [...item.firstElementChild.firstElementChild.children].forEach(item => {
                item.style.opacity = 1;
            }) 
        });

        [...display.children].forEach(item => item.style.opacity = 0);
    };
    productItem.onmouseover = () => [...display.children].forEach(item => item.style.opacity = null);

    display.onclick = () => {
        perfectListBlock.style.top = 0;
        setTimeout(() => perfectView.style.translate = null, 500);
        setTimeout(() => {
            [...perfectListBlock.children].forEach(item => {
                item.style.translate = null;
            });
            perfectListBlock.children[0].style.translate = `-50%`;            
            perfectListBlock.children[0].style.top = `1.5%`;     
            perfectListBlock.children[4].style.translate = `-50%`;
        }, 800);
        // perfectListBlock.children[0].style.translate = null;
        // perfectListBlock.children[2].style.translate = null;
        // perfectListBlock.children[3].style.translate = `-50%`
        perfectView.src = display.style.backgroundImage.slice(display.style.backgroundImage.indexOf('"') + 1, display.style.backgroundImage.lastIndexOf('"'));
        globalData.data.perfectListSlider.index = index;
        perfectListRadio.children[globalData.data.perfectListSlider.radioCur = globalData.data.perfectListSlider.data[index] || 0].checked = true;
    };

    const prodName = c('h3');
    display.after(prodName);
    prodName.innerText = item;
    prodName.style = `font: bold 24px sans-serif; text-transform: uppercase; margin-top: 5px; user-select: none; transition: 0.5s;`;
    const prodPrice = c('h4');
    prodName.after(prodPrice);
    prodPrice.innerText = globalData.language[globalData.data.langIndex].price[index];
    prodPrice.style = `font: bold 25px sans-serif; margin: 6px 0; user-select: none; transition: 0.5s`;

    const plusMinusBlock = c('div');
    prodPrice.after(plusMinusBlock);
    plusMinusBlock.style = `display: flex; justify-content: center;`;
    const screenDigit = c('div');
    plusMinusBlock.append(screenDigit);
    screenDigit.innerText = 1;
    screenDigit.style = `width: 45px; height: 30px; border: 1px solid #000; display: flex; justify-content: center; align-items: center; font: bold 20px sans-serif; cursor: pointer; background: #0f0; user-select: none; transition: 0.4s`;
    for(let i = 0; i < 2; i++) {
        const quantBtn = c('div');
        quantBtn.style = screenDigit.getAttribute('style'); // vorpeszi nuyn kody chgrenq ayspes vercnum enq screenDigit-i style-y
        quantBtn.style.width = `38px`;
        quantBtn.onmousemove = () => {
            quantBtn.style.background = `#222`;
            quantBtn.style.color = `#fff`;
        }
        quantBtn.onmouseleave = () => {
            quantBtn.style.background = null;
            quantBtn.style.color = null;
        }
        if(i == 0) {
            screenDigit.before(quantBtn);
            quantBtn.innerText = '-';
            quantBtn.style.background = `none`;
            quantBtn.onclick = () => {
                if(screenDigit.innerText > 1) {
                    screenDigit.innerText--;
                }
            };
        } else {
            screenDigit.after(quantBtn);
            quantBtn.innerText = '+';
            quantBtn.style.background = `none`;
            quantBtn.onclick = () => {
                if(screenDigit.innerText < 20) {
                    screenDigit.innerText++;
                }
            };
        }
    }
    const addCard = c('div');
    plusMinusBlock.after(addCard);
    addCard.innerText = globalData.language[globalData.data.langIndex].cardText;
    addCard.style = `background: #0f0; position: absolute; bottom: -12px; left: 50%; translate: -50%; padding: 9px 15px; border-radius: 20px; box-shadow: 0 3px 6px #0009, inset 0 0 15px #0009; font: bold 16px sans-serif; cursor: pointer; user-select: none; transition: 0.5s; white-space: nowrap;`;
    addCard.className = 'add';
    addCard.onmouseover = () => {
        productItem.style.transform = null;
        productItem.style.transition = '0.7s';
        // addCard.style.setProperty('--x', e.offsetX + 'px');
        // addCard.style.setProperty('--y', e.offsetY + 'px');
    }
    addCard.onclick = () => {
        addCard.style.pointerEvents = 'none';
        addCard.style.background = '#b1b1b1';
        plusMinusBlock.style.pointerEvents = 'none';
        plusMinusBlock.style.opacity = 0.4;
        const line = c('div');
        cartLineBlock.append(line);
        line.style = `height: 120px; border-bottom: 1px solid #000; padding: 5px 20px; display: flex; justify-content: space-between; align-items: center; transition: 0.5s;`;

        const lineImg = c('img');
        line.append(lineImg);
        line.alt = `Img`;
        lineImg.src = display.style.backgroundImage.slice(display.style.backgroundImage.indexOf('"') + 1, display.style.backgroundImage.lastIndexOf('"'));
        lineImg.style = `height: 110px;`;
        const cloneName = prodName.cloneNode(true);
        globalData.cloneData[index] = cloneName;
        lineImg.after(cloneName);
        cloneName.style.fontSize = '22px';
        const clonePrice = prodPrice.cloneNode(true);
        cloneName.after(clonePrice);
        const quantity = c('h3');
        clonePrice.after(quantity);
        quantity.style = clonePrice.getAttribute('style')
        quantity.innerText = globalData.language[globalData.data.langIndex].quant + ' - ' + screenDigit.innerText;
        const total = c('h3');
        quantity.after(total);
        total.style = clonePrice.getAttribute('style');
        total.innerText = globalData.language[globalData.data.langIndex].total + ' - ' + screenDigit.innerText * new RegExp(/\d+/).exec(clonePrice.innerText)[0] + globalData.language[globalData.data.langIndex].value;
        const clonePlusMinus = plusMinusBlock.cloneNode(true);
        clonePlusMinus.style.pointerEvents = 'auto';
        clonePlusMinus.style.opacity = 1;
        total.after(clonePlusMinus);
        clonePlusMinus.firstElementChild.onmouseover = function() {
            this.style.background = '#000';
            this.style.color = '#fff';
        };
        clonePlusMinus.firstElementChild.onmouseleave = function() {
            this.style.background = null;
            this.style.color = null;
        };
        clonePlusMinus.lastElementChild.onmouseover = function() {
            this.style.background = '#000';
            this.style.color = '#fff'; 
        };
        clonePlusMinus.lastElementChild.onmouseleave = function() {
            this.style.background = null;
            this.style.color = null;
        };


        let sum = 0;
        const quantCount = () => {
            [...cartLineBlock.children].forEach(item => {
                sum += +new RegExp(/\d+/).exec(item.children[3].innerText)[0];
            });
        }
        quantCount();
        cartProductCount.innerText = sum;
        const changeValu = () => {
            quantity.innerText = globalData.language[globalData.data.langIndex].quant + ' - ' + clonePlusMinus.children[1].innerText;
            screenDigit.innerText = clonePlusMinus.children[1].innerText;
            total.innerText = globalData.language[globalData.data.langIndex].total + ' - ' + screenDigit.innerText * new RegExp(/\d+/).exec(clonePrice.innerText)[0] + globalData.language[globalData.data.langIndex].value; 
            globalData.data.globalData[index] = screenDigit.innerText * new RegExp(/\d+/).exec(clonePrice.innerText)[0];
            globalData.data.globalTotal = globalData.data.globalData.reduce((total, item) => total + item, 0);
            globalTotal.innerText = globalData.language[globalData.data.langIndex].total + ' - ' + globalData.data.globalTotal + globalData.language[globalData.data.langIndex].value;
 
        }
        changeValu();
        clonePlusMinus.lastElementChild.onclick = () => {
            if(clonePlusMinus.children[1].innerText < 20) {
                clonePlusMinus.children[1].innerText++;
                changeValu();
            };
            quantCount();
        };
        clonePlusMinus.firstElementChild.onclick = () => {
            if(globalData.data.cartBool) {
                clonePlusMinus.children[1].innerText--;
                changeValu();
                quantCount();
                if(clonePlusMinus.children[1].innerText == 0) { 
                    screenDigit.innerText = 1;
                    setTimeout(() => globalData.data.cartBool = false, 1);
                    setTimeout(() => {
                        line.style. scale = 0;
                        for(let i = 0; i < cartLineBlock.children.length; i++) {
                            cartLineBlock.children[i].style.transition = '0.5s';
                        }
                        setTimeout(() => {
                            for(let i = globalData.data.cartIndex; i < cartLineBlock.children.length; i++) {
                                cartLineBlock.children[i].style.translate = '0 -120px';
                            }
                            setTimeout(() => {
                                line.remove();
                                delete globalData.cloneData[index];
                                if(cartLineBlock.childElementCount == 0) {
                                    cartBlock.style.clipPath = 'circle(0 at 97% 90%)';
                                }
                                for(let i = globalData.data.cartIndex; i < cartLineBlock.children.length; i++) {
                                    cartLineBlock.children[i].style.translate = null;
                                    cartLineBlock.children[i].style.transition = null;
                                }
                                addCard.style.pointerEvents = null;
                                addCard.style.background = '#0f0';
                                plusMinusBlock.style.pointerEvents = null;
                                plusMinusBlock.style.opacity = 1;
                                globalData.data.cartBool = true;
                            }, 600)
                        }, 550)
                    }, 500);
                };
            }

        };
        // console.log(new RegExp(/\d+/).exec(clonePrice.innerText)[0]);  // d = digit  +-y nshanakum e menq tiv enq man galis incqan vor ka aysinqn maximum
    };
    setTimeout(() => {  // aystex setTimeout ogtagorcum enq vorovhetev products-y stexcvel e nerqevum setTimeout-i mijocov katarvum e 1 milivayrkyan ush
        products.insertAdjacentElement('beforeend', card);
    }, 1)
}); 

inp.oninput = () => {
    if(inp.value.length > 0) {
        allSearch.style.display = 'block';
    } else {
        allSearch.style.display = 'none';
    }

    if(inp.value.length >= 1) {
        globalData.data.serchBoolDown = true;
    } else {
        globalData.data.serchBoolDown = false;
    }
    if(inp.value.length == 0) {
        globalData.data.downCur = -1;
        globalData.data.downBool = false;
    }
    [...allSearch.children].forEach(item => {
        item.style.display = 'none';
        item.className = null;
        item.style.background = null;
        item.innerText = item.innerText.slice(0);
        if(item.innerText.toLowerCase().includes(inp.value.toLowerCase())) {
            item.style.display = 'block';
            item.className = 'show';
        }
        if(item.innerText.toLowerCase().startsWith(inp.value.toLowerCase())) {
            item.innerHTML = `<span style = 'color: #ffaa22; background: #000; padding: 3px; border-radius: 5px;'>${item.innerText.slice(0, inp.value.length)}</span>${item.innerText.slice(inp.value.length)}`
        }
        // console.log(item);
    });
}

const funcPlaceholder = () => {
    globalData.data.placeholder = 0;
    const writePlaceholder1 = setInterval(() => {
        inp.placeholder = globalData.language[globalData.data.langIndex].search.slice(0, globalData.data.placeholder++);
        if(inp.placeholder == globalData.language[globalData.data.langIndex].search) {
            clearInterval(writePlaceholder1);
            const writePlaceholder2 =  setInterval(() => {
                inp.placeholder = globalData.language[globalData.data.langIndex].search.slice(0, globalData.data.placeholder--);
                if(inp.placeholder == '') {
                    clearInterval(writePlaceholder2);
                    funcPlaceholder();
                }
            }, 120)
        }
    }, 120)
}
funcPlaceholder();

document.onkeydown = e => {
    if(globalData.data.serchBoolDown) {
        const elems = document.querySelectorAll('.show');
        if(e.key == 'ArrowDown') {
            globalData.data.downBool = true;
            if(globalData.data.downCur == elems.length - 1) {
                globalData.data.downCur = -1;
            }
            globalData.data.downCur++;
            elems.forEach(item => {
                item.style.background = null;
            });
            elems[globalData.data.downCur].style.background = '#7fff00';
        } else if(e.key == 'ArrowUp' && globalData.data.downBool) {
            if(globalData.data.downCur > 0) {
                globalData.data.downCur--;
            }
            elems.forEach(item => {
                item.style.background = null;
            });
            elems[globalData.data.downCur].style.background = '#7fff00';
        } else if(e.key == 'Enter' && globalData.data.downBool) {
            inp.value = elems[globalData.data.downCur].innerText;
            allSearch.style.display = 'none';
            globalData.data.downBool = false;
            globalData.data.downCur = -1;
        }
    }
}

const sliderBlock = c('div');
header.after(sliderBlock);  
const title = c('h1');
title.innerText = globalData.language[globalData.data.langIndex].title;
sliderBlock.append(title);
title.style = `position: absolute; top: 50%; left: 50%; translate: -50% -50%; font: bold 18vw sans-serif; color: #fff; text-shadow: 1px 0.2vw 0.3vw #000, 1px -0.2vw 0.3vw #000, 1px 0.6vw 0.3vw #167a3c; transition: opacity 0.5s` 
const big = c('div');
sliderBlock.insertAdjacentElement('afterbegin', big);
sliderBlock.style = `height: ${innerHeight - header.offsetHeight}px; overflow: hidden; position: relative; user-select: none; cursor: grab; margin-top: 100px;`;
big.style = `width: ${globalData.slider.length * 100}%; height: 100%; display: flex; position: relative; left: -100%; transition: 0.6s;`;

const radioBlock = c('div');
radioBlock.style = `position: absolute; padding: 2px; left: 50%; translate: -50% 0; bottom: 85px; left 0;  cursor: pointer;`

globalData.slider.forEach((item, index) => {
    const list = c('div');
    big.append(list);
    list.style = `width: 100%; height: 100%; background: url('${item}') no-repeat center / cover;`;
    if(index !=0 ) {
        const radio = c('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'dot');
        radioBlock.append(radio);
        radio.style = `cursor: pointer; width: 20px; height: 20px; margin: 0 4px;`;
        radio.className = `dot`;
        index == 1 ? radio.checked = true : '';
        radio.onchange = () => {
            globalData.data.radioCur = index - 1;
            globalData.data.sliderCur = index * -100;
            big.style.left = globalData.data.sliderCur + `%`;
        }
        radio.onmousedown = e => e.stopPropagation();
    }
})


const slideNext = () => {
    globalData.data.sliderBool = false;
    globalData.data.sliderCur += 100;
    globalData.data.radioCur--;
    if(globalData.data.radioCur < 0) {
        globalData.data.radioCur = radioBlock.children.length - 1;
    }
    if(globalData.data.sliderCur > 0) {
        big.style.transition = 'none';
        globalData.data.sliderCur = (globalData.slider.length - 1) * -100;
        setTimeout(() => {
            big.style.transition = '0.4s';
            globalData.data.sliderCur += 100;
            big.style.left = globalData.data.sliderCur + `%`;
        }, 10)
    }
    big.style.left = globalData.data.sliderCur + `%`;
    radioBlock.children[globalData.data.radioCur].checked = true;
    setTimeout(() => {
        globalData.data.sliderBool = true;
    }, 400);
}

const slidePrev = () => {
    globalData.data.sliderBool = false;
    globalData.data.sliderCur -= 100;
    globalData.data.radioCur++;
    if(globalData.data.radioCur == radioBlock.children.length) {
        globalData.data.radioCur = 0;
    }
    if(globalData.data.sliderCur < (globalData.slider.length - 1) * -100) {
        big.style.transition = 'none';
        globalData.data.sliderCur = 0;
        setTimeout(() => {
            big.style.transition = '0.4s';
            globalData.data.sliderCur -= 100;
            big.style.left = globalData.data.sliderCur + `%`;
        }, 10)
    }
    big.style.left = globalData.data.sliderCur + `%`;
    radioBlock.children[globalData.data.radioCur].checked = true;
    setTimeout(() => {
        globalData.data.sliderBool = true;
    }, 400);
}
for(let i = 0; i < 2; i++) {
    const btn = c('button');
    sliderBlock.append(btn);
    btn.style = `position: absolute; top: 50%; translate: 0 -50%; font-size: 4rem; padding: 0 22px 5px 22px; border-radius: 15px; border: 0; box-shadow: 0 0 15px #fff; cursor: pointer; transition: background 0.5s box-shadow 0.5s;`;
    if(i == 0) {
        btn.innerHTML = `&#10092`;
        btn.style.left = `3%`;
        btn.onclick = () => {
            if(globalData.data.sliderBool) {
                slideNext();
            }
        }
        btn.className = 'slideBtn prev';
    } else {
        btn.innerHTML = `&#10093`;
        btn.style.right = `3%`;
        btn.onclick = () => {
            if(globalData.data.sliderBool) {
                slidePrev();
            }
        }
        btn.className = 'slideBtn next';
    }

    btn.onmouseover = () => {
        btn.style.background = `#222`;
        btn.style.color = `#fff`;
    }
    btn.onmouseleave = () => {
        btn.style.background = null;
        btn.style.color = null;
    }

    btn.onmousedown = e => e.stopPropagation();
    
}

sliderBlock.insertAdjacentElement('beforeend', radioBlock);

sliderBlock.onmousedown = e => {
    if(e.button == 0) {
        globalData.data.moveBool = true;
        globalData.data.mouseX = e.x;
        sliderBlock.style.cursor = 'grabbing';
    }
}
document.onmouseup = () => {
    globalData.data.moveBool = false;
    sliderBlock.style.cursor = 'grab';

}
sliderBlock.onmousemove = e => {
    if(globalData.data.moveBool && globalData.data.sliderBool) {
        if(e.x < globalData.data.mouseX) {
            slidePrev();
            globalData.data.moveBool = false;
        } else if(e.x > globalData.data.mouseX) {
            slideNext();
            globalData.data.moveBool = false;
        }
    }
}


    // aystex Math funkcian ogtagorcum enq vopeszi tvery anverch chgnan scrollY-i mijocov
window.onscroll = () => {
    [...radioBlock.children].forEach(item => {
        item.style.transform = `rotate(${Math.min(scrollY * 2, 750)}deg) translateX(${Math.min(scrollY, 100)}px)`;
        item.style.opacity = Math.max(-scrollY / 500 + 1, 0);
    });
    document.querySelectorAll('.slideBtn').forEach(item => {
        item.style.rotate = Math.min(scrollY / 5, 100) + `deg`;
    });
    title.style.translate = `-50% ` + Math.min(scrollY / 7 - 50, 80) + `%`;
    title.style.opacity = Math.max(-scrollY / 300 + 1);
    title.style.letterSpacing = Math.min(scrollY / 6, 50) + 'px';
    header.style.background = `rgba(34, 34, 34, ${Math.max(-scrollY / 1000 + 1, 0.6)})`;
    header.style.height = Math.max(-scrollY / 10 + 100, 50) + 'px';
    globalData.data.signCloseTop = Math.max(-scrollY / 4 + 6, 3);
    logoImg.style.height = Math.max(-scrollY / 7 + 85, 50) + 'px';
    [...big.children].forEach(item => {
        item.style.backgroundPositionY = Math.max(-scrollY / 5 + 50, -14) + '%';
    });
    productTitle.style.opacity = Math.min(scrollY / 400, 1);
    productTitle.style.translate = `0 ${Math.max(-scrollY / 5 + 100, -50)}px`;
    productTitle.style.transition = 'popacity 0.5s';

    if(scrollY >= productBlock.offsetTop - innerHeight / 2) {
        cartBtn.style.right = `2%`;
    } else {
        cartBtn.style.right = `-5%`;
    }
};


document.onmousemove = e => {
    const mouse = c('span');
    document.body.append(mouse);
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.x + 'px';
    mouse.className = 'cursor';
    mouse.style.rotate = Math.random() * 360 + 'deg';
    setTimeout(() => {
        mouse.remove();
    }, 300)
}

const productBlock = c('div');
sliderBlock.after(productBlock);
productBlock.style = `text-align: center; padding: 30px;`;
const productTitle = c('h2');
productBlock.append(productTitle);
productTitle.innerText = globalData.language[globalData.data.langIndex].productTitle;
productTitle.style = `font: bold 5vw sans-serif; opacity: 0; translate: 0 90px`;

const products = c('div');
productTitle.after(products);
products.style = `display: flex; flex-wrap: wrap; justify-content: center; gap: 50px; padding: 55px;`

const perfectListBlock = c('div');
const script = document.querySelector('script');
script.before(perfectListBlock);
perfectListBlock.style = `position: fixed; top: 100%; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); z-index: 5; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(10px); user-select: none; overflow: hidden; transition: 0.5s;`;
const perfectView = c('img');
perfectView.alt = 'Img';
perfectView.src = globalData.productImage[0][0];
perfectListBlock.append(perfectView);
perfectView.style = `width: 42vw; height: 40vw; background: #fff; object-fit: contain; border-radius: 15px; border: 10px double #000; margin: 0 30px; translate: 0 -45vw; transition: 0.5s;`;
for(let i = 0; i < 2; i++) {
    const arrow = c('div');
    arrow.style = `padding: 0 30px 4px 30px; font-size: 4vw; background: #fff; border-radius: 50%; cursor: pointer; box-shadow: inset 0 0 15px #000; transition: 0.3s`;
    if(i == 0) {
        perfectView.before(arrow);
        arrow.innerHTML = `&#10092`;
        arrow.style.translate = '-30vw';
        arrow.onclick = () => {
            if(globalData.data.perfectListSlider.bool) {
                globalData.data.perfectListSlider.bool = false;
                perfectView.style.filter = `brightness(1.5)`;
                perfectListRadio.style.pointerEvents = 'none';
                setTimeout(() => {
                    globalData.data.perfectListSlider.bool = true;
                    perfectView.style.filter = null;
                    globalData.data.perfectListSlider.radioCur--;
                    if(globalData.data.perfectListSlider.radioCur < 0) {
                        globalData.data.perfectListSlider.radioCur = perfectListRadio.children.length - 1;
                    }
                    perfectView.src = productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.children[globalData.data.perfectListSlider.radioCur].src;
                    perfectListRadio.children[globalData.data.perfectListSlider.radioCur].checked = true;
                    perfectListRadio.style.pointerEvents = null;
                }, 400);
            }
        };
    } else {
        perfectView.after(arrow);
        arrow.innerHTML = `&#10093`;
        arrow.style.translate = '30vw';
        arrow.onclick = () => {
            if(globalData.data.perfectListSlider.bool) {
                globalData.data.perfectListSlider.bool = false;
                perfectView.style.filter = `brightness(1.5)`;
                perfectListRadio.style.pointerEvents = 'none';

                setTimeout(() => {
                    globalData.data.perfectListSlider.bool = true;
                    perfectView.style.filter = null;
                    globalData.data.perfectListSlider.radioCur++;
                    if(globalData.data.perfectListSlider.radioCur == perfectListRadio.children.length) {
                        globalData.data.perfectListSlider.radioCur = 0;
                    }
                    globalData.data.perfectListSlider.data[globalData.data.perfectListSlider.index] = globalData.data.perfectListSlider.radioCur;
                    productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.style.backgroundImage = `url('${productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.children[globalData.data.perfectListSlider.radioCur].src}')`
                    perfectView.src = productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.children[globalData.data.perfectListSlider.radioCur].src;
                    perfectListRadio.children[globalData.data.perfectListSlider.radioCur].checked = true;
                    perfectListRadio.style.pointerEvents = null;
                }, 400)
            };
        };
    }
    // arrow.style = `padding: 0 30px 4px 30px; font-size: 4vw; background: #fff; border-radius: 50%; cursor: pointer; box-shadow: inset 0 0 15px #000; transition: 0.5s`;
    arrow.onmouseover = () => arrow.style.scale = '1.2 1.4';
    arrow.onmouseleave = () => arrow.style.scale = null;
}
const perfectListRadio = c('div');
perfectListBlock.append(perfectListRadio);
perfectListRadio.style = `position: absolute; bottom: 3%; left: 50%; translate: -50% 5vw; transition: 0.5s;`;
for(let i = 0; i < 3; i++) {
    const perfectDot = c('input');
    perfectDot.type = 'radio';
    perfectDot.name = 'perfectListSlider';
    perfectListRadio.append(perfectDot)
    perfectDot.style = `width: 20px; height: 20px; cursor: pointer; margin: 0 3px; accent-color: #fff`;
    perfectDot.oninput = () => {
        if(globalData.data.perfectListSlider.bool) {
            globalData.data.perfectListSlider.bool = false;
            perfectView.style.filter = `brightness(1.5)`;
            perfectListRadio.style.pointerEvents = 'none';
            setTimeout(() => {
                perfectView.style.filter = null;
                globalData.data.perfectListSlider.bool = true;
                globalData.data.perfectListSlider.radioCur = i;
                globalData.data.perfectListSlider.data[globalData.data.perfectListSlider.index] = globalData.data.perfectListSlider.radioCur;
                productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.style.backgroundImage = `url('${productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.children[globalData.data.perfectListSlider.radioCur].src}')`
                perfectView.src = productBlock.children[1].children[globalData.data.perfectListSlider.index].firstElementChild.firstElementChild.children[globalData.data.perfectListSlider.radioCur].src; 
                perfectListRadio.style.pointerEvents = null;
            }, 400)
        }
    
    };
};
const closePerfectListSlider = c('div');
closePerfectListSlider.textContent = 'X';
perfectListBlock.insertAdjacentElement('afterbegin', closePerfectListSlider)
closePerfectListSlider.style = `position: absolute; top: -10%; left: 50%; translate: -50%; width: 40px; height: 40px; color: #fff; background: red; border-radius: 50%; border: 2px solid #fff; cursor: pointer; display: flex; justify-content: center; align-items: center; font: bold 20px sans-serif;  transition: 0.5s;`;
closePerfectListSlider.onmouseover = function() {
    this.style.background = '#222';
}
closePerfectListSlider.onmouseleave = function() {
    this.style.background = 'red';
}
closePerfectListSlider.onclick = () => {
    setTimeout(() => perfectListRadio.style.translate = `-50% 5vw`, 150);    
    setTimeout(() => {
        perfectListBlock.children[1].style.translate = `-30vw`;     
        perfectListBlock.children[3].style.translate = `30vw`;
    }, 600);    
    setTimeout(() => perfectView.style.translate = '0 -50vw', 900);
    setTimeout(() => {
        perfectListBlock.children[0].style.translate = `-50%`;            
        perfectListBlock.children[0].style.top = `-10%`;  
        perfectListBlock.style.top = '100%'
    }, 1200);
}

const cartBlock = c('div');
script.before(cartBlock);
cartBlock.style = `position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; z-index: 9; backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; transition: 1.7s; clip-path: circle(0 at 97% 90%);`;
const cartItemsBlock = c('div');
cartBlock.append(cartItemsBlock);
cartItemsBlock.style = `width: 75%; height: 75%; background: #fff; border-radius: 20px 0 0 20px; position: relative;`;
const cartLineBlock = c('div');
cartItemsBlock.append(cartLineBlock);
cartLineBlock.style = `height: 100%; border-radius: 20px 0 0 20px; overflow: auto;`;
cartLineBlock.className = 'lineScroll';
const cartBtn = c('div');
script.before(cartBtn);
cartBtn.style = `position: fixed; bottom: 6%; right: -5%; width: 60px; height: 60px; display: flex; justify-content: center; align-items: center; font-size: 22px; cursor: pointer; border-radius: 50%; box-shadow: inset 0 0 10px #000; transition: 0.5s;`;
cartBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
cartBtn.onmouseover = () => {
    cartBtn.style.boxShadow = `inset 0 0 20px #0009`;
    cartBtn.firstElementChild.style.rotate = `-25deg`;
};
cartBtn.onmouseleave = () => {
    cartBtn.style.boxShadow = `inset 0 0 10px #000`;
    cartBtn.firstElementChild.style.rotate = null;
};
cartBtn.onclick = () => {
    cartBlock.style.clipPath = `circle(100%)`;
};
const closeCart = c('div');
closeCart.textContent = 'X';
cartBlock.insertAdjacentElement('afterbegin', closeCart);
closeCart.style = `position: absolute; top: 4%; left: 50%; translate: -50%; width: 40px; height: 40px; color: #fff; background: red; border-radius: 50%; border: 2px solid #fff; cursor: pointer; display: flex; justify-content: center; align-items: center; font: bold 20px sans-serif;  transition: 0.5s;`;
closeCart.onmouseover = () => closeCart.style.background = `#222`;
closeCart.onmouseleave = () => closeCart.style.background = `#f00`;
closeCart.onclick = () => cartBlock.style.clipPath = `circle(0 at 97% 90%)`;
const cartProductCount = c('span');
cartBtn.append(cartProductCount);
cartProductCount.innerText = 0;
cartProductCount.style = `position: absolute; top: -8px; right: 5px; background: #0f0; border-radius: 50%; width: 20px; height: 20px; font: bold 16px sans-serif; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 3px #0009, inset 0 2px 3px #0009; padding-top: 1.5px;`;

const globalTotal = c('h3');
cartItemsBlock.append(globalTotal);
globalTotal.innerText = globalData.language[globalData.data.langIndex].total + ' - ' + globalData.data.globalTotal + globalData.language[globalData.data.langIndex].value;
globalTotal.style = `position: absolute; top: 100%; left: 50%; translate: -50%; font: bold 24px sans-serif; padding: 6px 30px; border-radius: 0 0 30px 30px; background: #fff; transition: 0.5s`;
setInterval(() => {
    [...cartLineBlock.children].forEach((item, index) => { // qani vor nuyn elementi vra chenq karox ogtagorcel onclick functiony kogtvenq addEventListener-ic
        item.lastElementChild.firstElementChild.addEventListener('click', () => {
            if(globalData.data.cartBool) {
                globalData.data.cartIndex = index;
            }
        });
    });
}, 1);

const flagBlock = c('div');
flagBlock.style = `position: fixed; top: -100px; left: -100px; z-index: 20; padding: 0 3px; background: #fff; box-shadow: 0 3px 5px #0009`;
script.before(flagBlock);
globalData.flafFace.forEach((item, index) => {
    const btn = c('button');
    flagBlock.append(btn);
    btn.style = `width: 45px; height: 30px; background: ${item}; display: block; margin: 3px 0; cursor: pointer; transition: 0.4s;`;
    btn.onmouseover = () => btn.style.scale = 1.3;
    btn.onmouseleave = () => btn.style.scale = null;
    btn.onclick = () => {
        localStorage.setItem('megaSiteLang', index);
        globalData.data.langIndex = index;
        [...listMenu.children].forEach(item => item.firstElementChild.style.opacity = 0);
        [...allSearch.children].forEach(item => item.style.opacity = 0);
        title.style.opacity = 0;
        productTitle.style.opacity = 0;
        [...products.children].forEach((item) => {
            item.firstElementChild.children[1].style.opacity = 0;
            item.firstElementChild.children[2].style.opacity = 0;
            item.firstElementChild.children[4].style.opacity = 0;
        });
        globalData.cloneData.forEach((item) => {
            item.style.opacity = 0;
            item.nextElementSibling.style.opacity = 0;
            item.nextElementSibling.nextElementSibling.style.opacity = 0;
            item.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = 0;
        });
        globalTotal.style.opacity = 0;
        newAlertButton.style.opacity = 0;
        newAlertInfo.style.opacity = 0;
        signBtnBlock.firstElementChild.style.opacity = 0;
        signBtnBlock.lastElementChild.style.opacity = 0;
        exitSignInfo.style.opacity = 0; 
        [...signMiniBlock.children].forEach((item) => {
            if(item.tagName == 'INPUT') {
                item.className = 'changeLangInp';
            }
        });
        [...exitSignBtnBlock.children].forEach(item => item.style.opacity = 0);


        setTimeout(() => {
            globalData.cloneData.forEach((item, i) => {
                item.style.opacity = 1;
                item.innerText = globalData.language[index].searchList[i];
                item.nextElementSibling.style.opacity = 1;
                item.nextElementSibling.innerText = globalData.language[index].price[i];
                item.nextElementSibling.nextElementSibling.style.opacity = 1;
                item.nextElementSibling.nextElementSibling.innerText = globalData.language[index].quant + ' - ' + new RegExp(/\d+/).exec(item.nextElementSibling.nextElementSibling.innerText)[0];
                item.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = 1;
                item.nextElementSibling.nextElementSibling.nextElementSibling.innerText = globalData.language[index].total + ' - ' + new RegExp(/\d+/).exec(item.nextElementSibling.innerText)[0] * new RegExp(/\d+/).exec(item.nextElementSibling.nextElementSibling.innerText)[0] + globalData.language[index].value;
                globalData.data.globalData[i] = new RegExp(/\d+/).exec(item.nextElementSibling.innerText)[0] * new RegExp(/\d+/).exec(item.nextElementSibling.nextElementSibling.innerText)[0]
            });
            globalTotal.style.opacity = 1;
            globalData.data.globalTotal = globalData.data.globalData.reduce((total, item) => total + item, 0);
            loadUpdateLanguage(index, true);
        }, 400);

    }
});

document.oncontextmenu = e => {
    flagBlock.style.top = e.y + 'px';
    flagBlock.style.left = e.x + 'px';
    return false;
}
document.onclick = () => {
    flagBlock.style.top = null;
    flagBlock.style.left = null;
}


const setting = c('div');
script.before(setting);
setting.innerHTML = '<i class="fa-solid fa-gear"></i>';
setting.style = 'position: fixed; top: 14%; left: 0; font-size: 2.4vw; z-index: 14; color: #fff; background: #222; border-radius: 0 1vw 1vw 0; cursor: pointer; padding: 0.5vw 0.5vw 0.3vw 0.3vw; box-shadow: 0 0 10px #fff; transition: 0.4s; display: none;';
setting.onmouseover = () => {
    setting.style.background = '#0f0';
    setting.style.color = '#000';
}
setting.onmouseleave = () => {
    setting.style.background = '#222';
    setting.style.color = '#fff';
}
setting.onclick = () => {
    signOverlay.style.clipPath = `circle(100%)`;
    setting.style.display = 'none';
    setTimeout(() => signMiniBlock.style.translate = null, 500);
    setTimeout(() => {
        signMiniBlock.children[2].style.opacity = null;
        signMiniBlock.children[2].style.pointerEvents = null;
        signMiniBlock.children[2].style.translate = null;
        signMiniBlock.children[4].style.opacity = null;
        signMiniBlock.children[4].style.pointerEvents = null;
        signMiniBlock.children[4].style.translate = null;
        signMiniBlock.children[3].style.margin = null;
    }, 1000);
}