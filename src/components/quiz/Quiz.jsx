import React, { useState } from 'react';
import Header from "../Header";
import Qnumber from './questions';
import Score from './Score';
import Q from '../../questions.json';


function Quiz() {

    const [questNo, setQuestNo] = useState(0);
    const [score, setScore] = useState(0);


    const keyCount = Object.keys(Q);
    console.log(keyCount.length);

    function noName(params) {
        setQuestNo(questNo + 1);
        params === true && setScore(score + 1);

    }

    return (
        <div>

            <Header />

            {questNo === 0 && <button className='startBtn' onClick={() => { setQuestNo(1) }}>Start</button>}

            {questNo === 1 && <Qnumber
                question={Q.q1.question}
                optionName={Q.q1.optionName}
                answer={Q.q1.answer}
                fun={noName}
            />}

            {questNo === 2 && <Qnumber
                question={Q.q2.question}
                optionName={Q.q2.optionName}
                answer={Q.q2.answer}
                fun={noName}

            />}

            {questNo === 3 && <Qnumber
                question={Q.q3.question}
                optionName={Q.q3.optionName}
                answer={Q.q3.answer}
                fun={noName}

            />}


            {/* score */}
            {questNo > 3 && <Score score={score} />}

            {/* current question */}
            {questNo < 4 && <span className='span'><span>{questNo}</span>/3</span>}

            {/* retake */}
            {questNo > 3 && <button onClick={() => { setQuestNo(1); setScore(0); }} className="retake">Retake</button>}


        </div>
    );
}

export default Quiz;