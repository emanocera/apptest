import React from 'react';
import { storiesOf } from '@storybook/react';
import PageBar from '.';
import HelpButtons from '../HelpButtons';
import IconButton from '../IconButton';

storiesOf('Template Components/PageBar', module).add('default', () => {
    const handleTips = () => {
        alert('tips');
    };
    const handleHelp = () => {
        alert('help');
    };
    const handleClose = () => {
        alert('cerrar');
    };
    return (
        <PageBar
            title="Nuevo Comprobante"
            onClose={handleClose}
            actions={<HelpButtons tipsOnClick={handleTips} helpOnClick={handleHelp} />}
        />
    )
});

storiesOf('Template Components/PageBar', module).add('with icons', () => {
    
    const handleDownload = () => {
        alert('descargar');
    };
    const handlePrint = () => {
        alert('imprimir');
    };
    const handleSend = () => {
        alert('enviar por mail');
    };
    const handleNotes = () => {
        alert('notas');
    };
    const handleHistory = () => {
        alert('historial');
    };
    const handleClose = () => {
        alert('cerrar');
    };
    return (
        <PageBar
            title="Visualizar comprobante"
            hideTitleOnMobile
            onClose={handleClose}
            actions={
                <>
                <IconButton icon="download" onClick={handleDownload} tooltip="Descargar"/>
                <IconButton icon="print" onClick={handlePrint} tooltip="Imprimir"/>
                <IconButton icon="send" onClick={handleSend} tooltip="Envíar por mail"/>
                <IconButton icon="note" onClick={handleNotes} tooltip="Notas"/>
                <IconButton icon="calendar" onClick={handleHistory} tooltip="Historial"/>
                </>
            }
        />
    )
});