import { useMemo, useRef, useState } from 'react';
import song from '../../assets/song.mp3';
import logo from '../../assets/logo.png';
import { steps } from './copy';

const Step = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedStep, setSelectedStep] = useState(0);

  const SelectedStep = useMemo(
    () => (
      <div className="step">
        <img src={logo} alt="Ritovia" />
        {steps[selectedStep].title1 && <h1>{steps[selectedStep].title1}</h1>}
        <h1 className="mb-4">{steps[selectedStep].title2}</h1>
        <p>{steps[selectedStep].description}</p>
      </div>
    ),
    [selectedStep]
  );

  const nextStep = () => {
    setSelectedStep((prev) => prev + 1);
    if (selectedStep === 4 && audioRef.current) audioRef.current.play();
  };

  return (
    <div className="next-step-container">
      {SelectedStep}
      {selectedStep !== 5 && (
        <button onClick={nextStep} className="next-step-button">
          Próximo capítulo
        </button>
      )}
      <audio ref={audioRef} src={song} />
    </div>
  );
};

export default Step;
