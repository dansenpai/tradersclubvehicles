import React from 'react';
import {
  Input, 
  ActionsWrapper, 
  ActionsLeft, 
  Row, 
  Column,
} from './vehicles.styles';
import Button from '../../components/button/button';
import SelectInput from '../../components/select_input/select_input';

const renderField = (field, handleValue) => {
  if(field.type === 'select') {
    return (
      <SelectInput
        placeholder={field.placeholder}
        name={field.name}
        onChange={handleValue}
        options={field.options}
      />
    )
  }

  return(
    <Input name={field.name} onChange={handleValue} placeholder={field.placeholder} />
  )
}

const Form = () => {
  const initialValues = {
    name: '',
    brand: '',
    year: '',
    vendor: '',
    color: '',
    card: '',
    number: '',
  }

  const VendorOptions = [{value: 1, label: 'VW'}];
  const [values, setValues] = React.useState(initialValues);

  const handleValue = (e) => {
    setValues({[e.target.name]: e.target.value});
  }

  const handleSubmit = () => {
    console.log('values',values);
  }

  const formFields = [
    {name: 'name', size: 100, placeholder: 'Nome'},
    {name: 'brand', size: 45, placeholder: 'Marca'},
    {name: 'year', size: 45, placeholder: 'Ano'},
    {
      name: 'vendor',
      size: 100,
      placeholder: 'Fabricante',
      type: 'select',
      options: VendorOptions
    },
    {name: 'color', size: 45, placeholder: 'Cor'},
    {name: 'card', size: 45, placeholder: 'Placa'},
    {name: 'number', size: 45, placeholder: 'Número'},
  ];

  return(
    <div>
      <Row>
        {formFields.map((field, index) => (
          <Column key={index} size={field.size}>
            {renderField(field, handleValue)}
          </Column>
        ))}
      </Row>

      <ActionsWrapper>
        <ActionsLeft>
          <Button type="TRANSPARENT">Remover</Button>
          <Button type="TRANSPARENT">Cancelar</Button>
        </ActionsLeft>
        <Button onClick={handleSubmit}>Salvar</Button>
      </ActionsWrapper>
    </div>
  )
}

export default React.memo(Form);
