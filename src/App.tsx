import React, { useState } from 'react';
import './App.css';
import CustomBtn from './component/CustomBtn';
import { getRandomLetter, generateName, generateNameWithLength } from './nameGener';
import letters from './component/letters'
import GenerBtn from './component/GenerBtn';

type Position = 'front' | 'back' | 'random';

const RandomNameGenerator: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [generatedName, setGeneratedName] = useState<string>('');
  const [position, setPosition] = useState<Position>('random');

    const handleGenerateName = () => {
    generateName(userInput, letters, position, setGeneratedName);
};

  const generateThreeLetterName = () => {
    generateNameWithLength(userInput, letters, position, 3, setGeneratedName);
};

const generateLongName = () => {
    generateNameWithLength(userInput, letters, position, 6, setGeneratedName);
};


  return (
    <div>
       <div>
        <CustomBtn isActive={position === "front"} onClick={() => setPosition("front")} marginRight={true}>
          앞글자 고정
        </CustomBtn>      
        <CustomBtn isActive={position === "back"} onClick={() => setPosition("back")} marginRight={true}>
          뒷글자 고정
        </CustomBtn>  
        <CustomBtn isActive={position === "random"} onClick={() => setPosition("random")}>
          랜덤
        </CustomBtn>  
    </div>
    <div style={{ margin: '0 auto', maxWidth: '400px' }}>
      <div className="columns mt-3">
        <div className="column">
          <input
            className='input is-primary'
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            maxLength={1}
            placeholder="글자 하나를 입력해주세요."
          />
        </div>
      </div>
      <div className="columns is-flex is-justify-content-center">
        <div className="columns is-flex is-justify-content-center">
          <GenerBtn label="녜힁 제조" onClick={handleGenerateName} />
          <GenerBtn label="세글자 녜힁" onClick={generateThreeLetterName} />
          <GenerBtn label="긴 녜힁" onClick={generateLongName} />
        </div>
      </div>
    </div>
        <div className='columns is-justify-content-center'>
          <div className='column is-three-quarters'>
            <div className="card mt-5 ">
              <div className="card-content">
                <div className="content is-size-5">
                생성된 녜힁: <strong>{generatedName}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
            <p className="title">
            반랜덤 녜힁 생성기
            </p>
            <p className="subtitle is-size-6">
              원하는 글자를 포함한 녜힁을 제조하는 생성기입니다.<br />
              글자를 고정할 위치를 선택한 뒤, 포함할 글자를 하나 입력해주세요
            </p>        
        </div>
      </section>
      <div className='mt-5'>
          <RandomNameGenerator />
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Partially Random Nickname Generator for Maplestory ver1.1</strong> <br/>by datain updated at 230910
            <div>
              contact: mystrange01@gmail.com
            </div>
          </p>
        </div>
</footer>
    </>
    
  );
}

export default App;
