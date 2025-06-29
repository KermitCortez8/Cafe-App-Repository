// InfoCafe-2/hooks/useMapScreenLogic.js
import { useState, useEffect, useRef } from 'react';
import { useStoreContext } from '../store/store';
import { GOOGLE_MAPS_KEY } from '@env';

export default function useMapScreenLogic() {
  const { state } = useStoreContext();
  const saved = state.deliveryAddress;
  const hasDetails = !!saved?.details?.geometry?.location;

  const origin = { latitude: -12.1278861, longitude: -76.9869997 };

  const [destination,   setDestination]    = useState(null);
  const [fullCoords,    setFullCoords]     = useState([]);
  const [sampleIndices, setSampleIndices]  = useState([]);
  const [bikePos,       setBikePos]        = useState(origin);
  const [simIndex,      setSimIndex]       = useState(0);
  const [totalMin,      setTotalMin]       = useState(0);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  useEffect(() => {
    if (!saved) return;
    if (hasDetails) {
      const { lat, lng } = saved.details.geometry.location;
      setDestination({ latitude: lat, longitude: lng });
    } else {
      (async () => {
        const url =
          `https://maps.googleapis.com/maps/api/geocode/json?` +
          `&address=${encodeURIComponent(saved.description)}` +
          `&key=${GOOGLE_MAPS_KEY}`;
        const res  = await fetch(url);
        const json = await res.json();
        const loc  = json.results?.[0]?.geometry?.location;
        if (loc) setDestination({ latitude: loc.lat, longitude: loc.lng });
      })();
    }
  }, [saved]);

  const onInitialReady = result => {
    const coords = result.coordinates;
    if (coords.length < 2) return;

    setTotalMin(Math.ceil(result.duration));
    setFullCoords(coords);

    const STEPS = 5;
    const block = Math.floor((coords.length - 1) / (STEPS - 1));
    const indices = Array(STEPS)
      .fill(0)
      .map((_, i) =>
        i === STEPS - 1 ? coords.length - 1 : i * block
      );
    setSampleIndices(indices);

    clearInterval(timerRef.current);
    setBikePos(coords[indices[0]]);
    setSimIndex(0);

    let idx = 1;
    timerRef.current = setInterval(() => {
      if (idx >= indices.length) return clearInterval(timerRef.current);
      setBikePos(coords[indices[idx]]);
      setSimIndex(idx);
      idx++;
    }, 7000);
  };

  const totalSteps = sampleIndices.length - 1;
  const progress   = totalSteps > 0 ? simIndex / totalSteps : 0;
  const etaLeft    = Math.max(0, totalMin - Math.round(progress * totalMin));

  // flag para saber si aún queda ruta
  const hasRouteRemaining = simIndex < totalSteps;

  return {
    origin,
    destination,
    fullCoords,
    sampleIndices,
    bikePos,
    onInitialReady,
    progress,
    etaLeft,
    simIndex,
    hasRouteRemaining
  };
}
