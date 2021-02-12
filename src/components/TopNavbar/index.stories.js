import React from 'react';
import { storiesOf } from '@storybook/react';
import TopNavbar from '.';
import logo from '../../images/logo.svg';

const filtros = [
    'Cliente',
    'Proveedor',
    'Factura',
    'Producto/Servicio',
    'Entidad',
    'Cobranza',
    'Presupuesto',
];

const favoritos = [
    { texto: "Facturación", href: "#" },
    { texto: "Integraciones", href: "#" },
    { texto: "Cobranzas", href: "#" },
    { texto: "Presupuestos", href: "#" },
    { texto: "Productos y Servicios", href: "#" },
    { texto: "Clientes", href: "#" },
    { texto: "Comprobantes", href: "#" },
    { texto: "Pagos", href: "#" },
    { texto: "Proveedores", href: "#" },
    { texto: "Entidades", href: "#" },
    { texto: "Cheques", href: "#" },
    { texto: "Mov. Bancarios", href: "#" },
    { texto: "Stock", href: "#" },
    { texto: "Stock mínimo", href: "#" },
    { texto: "Cuenta Corriente", href: "#" },
    { texto: "Cobranzas pendientes", href: "#" },
    { texto: "Ventas mensuales", href: "#" },
];



const altas = [
    {
        modulo: "Ventas",
        altas: [
            {
                texto: "Factura",
                url: "#",
            },
            {
                texto: "Cobranza",
                url: "#",
            },
            {
                texto: "Presupuesto",
                url: "#",
            },
        ]
    },
    {
        modulo: "Compras",
        altas: [
            {
                texto: "Orden de Compra",
                url: "#",
            },
            {
                texto: "Comprobante",
                url: "#",
            },
            {
                texto: "Pago",
                url: "#",
            },
        ]
    },
    {
        modulo: "Tesorería",
        altas: [
            {
                texto: "Entidad",
                url: "#",
            },
            {
                texto: "Mov. de Caja",
                url: "#",
            },
            {
                texto: "Cheque",
                url: "#",
            },
        ]
    },
    {
        modulo: "Inventarios",
        altas: [
            {
                texto: "Depósito",
                url: "#",
            },
            {
                texto: "Mov. de Stock",
                url: "#",
            },
            {
                texto: "Mov. entre depósitos",
                url: "#",
            },
        ]
    },
];

const notificaciones = {
    notificaciones: {
        nuevo: [
            {
                mensaje: 'Pago de comprobante',
                caption: '01/01/2021 - COT 0001-00123403',
            },
            {
                mensaje: 'Pago de comprobante',
                caption: '01/01/2021 - FCB 0001-00000000',
            },
        ],
        anterior: [
            {
                mensaje: 'Pago de comprobante',
                caption: '01/01/2021 - FCB 0005-00000001',
            },
            {
                mensaje: 'Pago de comprobante',
                caption: '01/01/2021 - COT 0001-00123399',
            },
        ],
    },
    anuncios: ""
};

const empresas = [
    {
        nombre: "DEMO SRL",
        id: "30708951842",
        color: "#E8467C",
    },
    {
        nombre: "ACHESOFT",
        id: "30708951842",
        color: "#00AA9E",
    },
    {
        nombre: "EMPRESA TEST",
        id: "30708951842",
        color: "#F67C3C",
    },
    {
        nombre: "EXTREME WEAR",
        id: "30708951842",
        color: "#14B9D5",
    },
    {
        nombre: "DEMO SRL",
        id: "30708951842",
        color: "#E8467C",
    },
    {
        nombre: "ACHESOFT",
        id: "30708951842",
        color: "#00AA9E",
    },
    {
        nombre: "EMPRESA TEST",
        id: "30708951842",
        color: "#F67C3C",
    },
    {
        nombre: "EXTREME WEAR",
        id: "30708951842",
        color: "#14B9D5",
    },
];

const menuPrimario = [
    {
        texto: "Dashboard",
        icono: "dashboard",
        submenu: "",
    },
    {
        texto: "Ventas",
        icono: "shoppingCart",
        submenu: [
            {
                texto: "Facturación",
                icono: "file",
            },
            {
                texto: "Integraciones",
                icono: "file",
            },
        ]
    },
    {
        texto: "Compras",
        icono: "shoppingBag",
        submenu: [
            {
                texto: "Ordenes de Compra",
                icono: "file",
            },
            {
                texto: "Comprobantes",
                icono: "file",
            },
        ]
    },
    {
        texto: "Tesorería",
        icono: "bank",
        submenu: [
            {
                texto: "Entidades",
                icono: "file",
            },
            {
                texto: "Cajas",
                icono: "file",
            },
        ]
    },
    {
        texto: "Inventarios",
        icono: "shoppingBasket",
        submenu: [
            {
                texto: "Depósitos",
                icono: "file",
            },
            {
                texto: "Modif. de stock",
                icono: "file",
            },
            {
                texto: "Mov. entre depósitos",
                icono: "file",
            },
            {
                texto: "Importación masiva de productos",
                icono: "file",
            },
            {
                texto: "Actualización masiva de stock",
                icono: "file",
            },
        ]
    },
    {
        texto: "Reportes",
        icono: "report",
        submenu: [""],
    },
    {
        texto: "Configuración",
        icono: "settings",
        submenu: "",
    },
];


const menuSecundario = [
    {
        texto: "Plan de referidos",
        icono: "users",
    },
    {
        texto: "Funcionalidades",
        icono: "feature",
    },
    {
        texto: "Centro de Ayuda",
        icono: "helpCircle",
    },
];


storiesOf('Template Components/TopNavbar', module).add('default', () => {
    return (
        <TopNavbar
            logo={logo}
            //links={[{ texto: 'Prueba Link 1', url: '#' }, { texto: 'Prueba Link 2', url: '#' }]}
            alert="Tu Plan Standard vence en 5 días ¡Reservalo ahora!"
            showLeftSidebar
            showNotifications
            showUser
            dataAltas={altas}
            dataFavoritos={favoritos}
            dataFiltrosBusqueda={filtros}
            dataEmpresas={empresas}
            dataNotificaciones={notificaciones}
            dataMenuPrimario={menuPrimario}
            dataMenuSecundario={menuSecundario}
        />
    )
});

storiesOf('Template Components/TopNavbar', module).add('with links', () => {
    return (
        <TopNavbar
            logo={logo}
            links={[{ texto: 'Prueba Link 1', url: '#' }, { texto: 'Prueba Link 2', url: '#' }]}
            showCart
            showUser
            dataEmpresas={empresas}
        />
    )
});