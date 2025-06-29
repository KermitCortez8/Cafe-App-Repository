import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useStoreContext } from '../store/store';
import { GOOGLE_MAPS_KEY } from '@env';

export default function useDireccionInput() {
  const { state, setDeliveryAddress } = useStoreContext();
  const isSaved = !!state.deliveryAddress;

  const [input, setInput]           = useState('');
  const [predictions, setPredictions] = useState([]);
  const [selection, setSelection]     = useState(null);
  const [readyToSave, setReadyToSave] = useState(false);

  const onChangeText = t => {
    setInput(t);
    setSelection(null);
    setReadyToSave(t.trim().length > 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      input.length >= 2 ? fetchPredictions(input) : setPredictions([]);
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);

  async function fetchPredictions(text) {
    const url =
      `https://maps.googleapis.com/maps/api/place/autocomplete/json` +
      `?input=${encodeURIComponent(text)}` +
      `&key=${GOOGLE_MAPS_KEY}` +
      `&language=es&components=country:PE&types=address`;
    const res  = await fetch(url);
    if (!res.ok) return setPredictions([]);
    const json = await res.json().catch(() => null);
    setPredictions(json?.predictions || []);
  }

  async function fetchPlaceDetails(placeId) {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${placeId}` +
      `&fields=formatted_address,geometry` +
      `&key=${GOOGLE_MAPS_KEY}`;
    const res  = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json().catch(() => null);
    return json?.result || null;
  }

  const handleSelect = async item => {
    const details = await fetchPlaceDetails(item.place_id);
    if (!details) return;
    setInput(details.formatted_address);
    setSelection({ description: details.formatted_address, details });
    setPredictions([]);
    setReadyToSave(true);
    Keyboard.dismiss();
  };

  const handleSave = () => {
    if (!readyToSave) return;
    const toSave = selection || { description: input.trim(), details: null };
    setDeliveryAddress(toSave);
    setReadyToSave(false);
  };

  const handleEdit = () => {
    setDeliveryAddress(null);
  };

  return {
    input,
    onChangeText,
    predictions,
    handleSelect,
    readyToSave,
    isSaved,
    handleSave,
    handleEdit
  };
}
