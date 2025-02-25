import { useMemo, useRef, useState } from 'react';
import song from '../../assets/song.mp3';
import logo from '../../assets/logo.png';
import { steps } from './copy';

const Step = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedStep, setSelectedStep] = useState(0);

  const SelectedStep = useMemo(
    () => (
      <div className="flex flex-col items-center">
        <img src={logo} alt="Ritovia" className="h-[250px] mb-4" />
        {steps[selectedStep].title1 && (
          <h1 className="font-semibold  text-2xl">
            {steps[selectedStep].title1}
          </h1>
        )}
        <h1 className="font-semibold mb-4 text-2xl">
          {steps[selectedStep].title2}
        </h1>
        <p className="text-xl">{steps[selectedStep].description}</p>
      </div>
    ),
    [selectedStep]
  );

  const nextStep = () => {
    setSelectedStep((prev) => prev + 1);
    if (selectedStep === 4 && audioRef.current) audioRef.current.play();
  };

  return (
    <div className="next-step-container h-screen">
      {SelectedStep}
      {selectedStep !== 5 && (
        <button onClick={nextStep} className="next-step-button">
          Próximo capítulo
        </button>
      )}
      <audio ref={audioRef} src={song} autoPlay />
    </div>
  );
};

export default Step;
