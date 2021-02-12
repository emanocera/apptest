import React from 'react';
import { storiesOf } from '@storybook/react';
import PageFooter from '.';
import Icon from '../Icon';
import Button from '../Button';
import IconButton from '../IconButton';

storiesOf('Template Components/PageFooter', module).add('default', () => {
    const handleSuccess = () => {
        alert('finalizar');
    };
    const handleCancel = () => {
        alert('cancelar');
    };
    const handlePrint = () => {
        alert('imprimir');
    };
    const handlePreview = () => {
        alert('previsualizar');
    };
    return (
        <PageFooter
            successText="Finalizar"
            cancelText="Cancelar"
            onSuccess={handleSuccess}
            onCancel={handleCancel}
            actionsDesktop={
                <>
                    <Button 
                        variant="outlined" 
                        startIcon={<Icon name="print" />} 
                        onClick={handlePrint}
                    > 
                        Imprimir
                    </Button>

                    <Button 
                        variant="outlined" 
                        startIcon={<Icon name="view" />}
                        onClick={handlePreview}
                    >
                        Previsualizar
                    </Button>
                </>
            }
            actionsMobile={
                <>
                    <IconButton icon="print" onClick={handlePrint} />
                    <IconButton icon="view" onClick={handlePreview} />
                </>
            }
        />
    )
});
