'use strict';

axios.get('/api/users').then(function (response) {
    document.getElementById('people').innerHTML = response.data.map(function (person) {
        return '<div class="user-list container">' + '<span class="row bg-faded d-flex align-items-center border mt-1">' + '<div class="col-4 d-flex align-items-center border show">' + '<img src="' + person.photo + '" class="rounded-circle" width="100" height="100"/>' + '<h3 class="m-3">' + person.name + '</h3>' + '<a href="#" id="eliminar" class="text-hide">Eliminar</a>' + '</div>' + '<div class="col-8">' + '<p class="m-1">' + person.description + '</p>' + '</div>' + '</span>' + '</div>';
    }).join('');
}).catch(function (err) {
    document.getElementById('people').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

(function () {
    var output = document.getElementById('output');
    document.getElementById('post').onclick = function () {
        var data = document.getElementById('data').value;
        axios.post('/post/server', JSON.parse(data)).then(function (res) {
            output.className = 'container';
            output.innerHTML = res.data;
        }).catch(function (err) {
            output.className = 'container text-danger';
            output.innerHTML = err.message;
        });
    };
})();

/*-----------------------------------------------------------------
const usuarios = [
    {
        id: 1, 
        name: 'Francisco', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb'
    },    
    {
        id: 2, 
        name: 'Pedro', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        photo: 'https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
    {
        id: 3, 
        name: 'Maria', 
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        photo: 'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
    {
        id: 4, 
        name: 'Jorge', 
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 
        photo: 'https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
    {
        id: 5, 
        name: 'Ana', 
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 
        photo: 'https://images.pexels.com/photos/418870/pexels-photo-418870.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
    {
        id: 6, 
        name: 'Felipe', 
        description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 
        photo: 'https://images.pexels.com/photos/325682/pexels-photo-325682.jpeg?h=350&auto=compress&cs=tinysrgb'
    }
];

const Id =          props => <h1 className="m-3">{props.user.id}</h1>;
const UserName =    props => <h3 className="m-3">{props.user.name}</h3>;
const Description = props => <p className="m-1">{props.user.description}</p>;
const Photo =       props => <img src={props.user.photo} className="rounded-circle" width="100" height="100"/>;

const User =        props => {
    return (
    <span className="row bg-faded d-flex align-items-center border mt-1">
        <div className="col-4 d-flex align-items-center border">
            <Photo user={props.user}/>
            <UserName user={props.user}/>
            <a href="#" id="eliminar" className="text-hide">Eliminar</a>         
        </div>
        <div className="col-8">
            <Description user={props.user}/>
        </div>
    </span>
    );
};
const UsersList =   props => {
    const userList = props.list.map((user, i) => <User  user = {user} key={i} />);
    return (
        <div className="user-list container">
            {userList}
        </div>
    );
};
ReactDOM.render(
    <UsersList list={usuarios} />, 
    document.getElementById('app')
);
----------------*/