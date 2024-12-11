import React, { useCallback, useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    const [skills, setSkills] = useState([]);

    function handleClick(e){
        e.preventDefault();
        setSkills([...skills, input.trim()]);
        setInput('');
    }
    const handleSkill = useCallback((value)=>{
        setSkills(skills.filter(skill => skill !== value));
    }, [skills]);
    
  return (
    <div>
        <h1 id='heading'>Add Skills To The List</h1>
        <form>
            <input id='skill-input' type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button id='skill-add-btn' onClick={(e)=>{handleClick(e)}}>Add Skill</button>
        </form>
        <UseCallbackComp skills={skills} handleSkill={handleSkill}/>
    </div>
  );
}

export default App;


function UseCallbackComp({skills, handleSkill}){

    return (
        <div>
            <ul id='skill-list'>
                {
                    skills.map((skill, index) => {
                        return <li id={`skill-number-${index}`} key={index}>
                                    {skill}
                                    <button onClick={()=>{handleSkill(skill)}}>Delete</button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}