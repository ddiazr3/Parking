const menu = [{
        name: 'Inicio',
        path: '/dashboard',
        icon: 'ni ni-tv-2 text-primary'
    },
    {
        name: 'Ingreso Vehiculo',
        path: '/icons',
        icon: 'ni ni-planet text-blue'
    },
    {
        name: 'Reportes',
        icon: 'ni ni-pin-3 text-orange',
        children: [{
            name: 'Vehiculo Activos',
            path: '/profile',
            icon: 'ni ni-single-02 text-yellow'
        }, {
            name: 'Horas',
            path: '/tables',
            icon: 'ni ni-bullet-list-67 text-red'
        }]
    },
    {
        name: 'Admistración',
        icon: 'ni ni-pin-3 text-orange',
        children: [{
            name: 'Vehiculo Activos',
            path: '/login',
            icon: 'ni ni-key-25 text-info'
        }, {
            name: 'Horas',
            path: '/register',
            icon: 'ni ni-circle-08 text-pink'
        }]
    },

]

export default menu;
