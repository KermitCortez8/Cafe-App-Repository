const React = require('react');
const { useState } = React;

export default () => ({
  input: 'Av',
  onChangeText: jest.fn(),
  predictions: [
    { place_id: '123', description: 'Av Siempre Viva 742' }
  ],
  handleSelect: jest.fn(),
  readyToSave: true,
  isSaved: false,
  handleSave: jest.fn(),
  handleEdit: jest.fn(),
});


module.exports = () => {
  const [input, setInput] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (input.trim() !== '') setIsSaved(true);
  };

  const handleEdit = () => {
    setIsSaved(false);
  };

  const predictions =
    input.trim().length > 0
      ? [
          { place_id: '123', description: 'Av Siempre Viva 742' },
          { place_id: '456', description: 'Calle Lima 100' },
        ]
      : [];

  return {
    input,
    onChangeText: setInput,
    predictions,
    handleSelect: jest.fn(),
    readyToSave: input.trim().length > 0,
    isSaved,
    handleSave,
    handleEdit,
  };
};
