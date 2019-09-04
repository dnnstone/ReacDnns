'use strict';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*ejercicio 1 */

//document.getElementById('app').innerHTML="<h1>Esto no es lo indicado</h1>";
//const e1=document.createElement('h1');
//const child=document.createElement('span');
//e1.setAttribute('id','title');
//e1.textContent='Hola Brother';
//child.textContent=' voy a ver si sale algo ';
//e1.appendChild(child);
//document.getElementById('app2').appendChild(e1);


/*ejercicio 2 usando React basico */

//const e1= React.createElement('h1',{id:'title'},'hola broster');
//ReactDOM.render(e1,document.getElementById('app2'));


/*ejercicio 3 usando React basico */

//const e1= React.createElement(
//        'h1',
//        {id:'title'},
//        'hola broster',
//        React.createElement('span',{id:'subtitle'},' soy React'));
//        
//ReactDOM.render(e1,document.getElementById('app2'));


/* usando React con JSX
 * 
 *  React usa JSX para crear los elementos, JSX es necesario compilarlo con prepos previamente
 *   
 *    
 *      */

//const e1=<h1 id="title"> hola broster3 {3+5} <span> soy reaction</span> </h1>;
//
//ReactDOM.render(e1,document.getElementById('app2'));

/* usando Reloj con js
 *     
 *       */

//const app=document.getElementById('reloj');
//function reloj()
//{
////    let now = new Date().toLocaleTimeString();
//    app.textContent=new Date().toLocaleTimeString();
////    console.log(now);
//}
//setInterval(reloj,1000);

/* usando Reloj con React
 *     
 *       */

var app = document.getElementById('reloj');
function reloj() {
    var now = new Date().toLocaleTimeString();
    var e1 = React.createElement(
        'span',
        null,
        now
    );
    ReactDOM.render(e1, app);
    //    console.log(now);
}
setInterval(reloj, 1000);

var Avatar = function Avatar(props) {
    return React.createElement('img', { src: props.user.img, alt: props.user.name });
};
var UserName = function UserName(props) {
    return React.createElement(
        'p',
        null,
        'Nombre: ',
        props.user.name
    );
};
var User = function User(props) {
    return React.createElement(
        'div',
        { className: 'user-item' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(UserName, { user: props.user })
    );
};
var UsersList = function UsersList(props) {
    var userList = props.list.map(function (user, i) {
        return React.createElement(User, { user: user, key: i });
    });
    return React.createElement(
        'div',
        { className: 'user-list' },
        userList
    );
};

var user = {
    name: "Daniel",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
};

var teachers = [{
    name: "Daniel",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Rafael",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Percy",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Nestor",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Renzo",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Luis",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Hugo",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Pacp",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Macpato",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Carlos",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Geronip",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Narcy",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}, {
    name: "Pedro",
    img: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
}, {
    name: "Chucho",
    img: "https://api.ed.team/files/avatars/5d038f09-1f35-4afa-9583-99f681b61fd2.jpg"
}];

/* usando Reloj con React
 *     ReactDOM.render(<User user={user}/>,document.getElementById('app'));
 *       */

ReactDOM.render(React.createElement(UsersList, { list: teachers }), document.getElementById('app'));