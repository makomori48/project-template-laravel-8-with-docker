import React from "react";


function Form({
  setInput,
  input,
  setBirth,
  birth,
  setEmail,
  email,
  setGender,
  gender,
  setTodos,
  todos,
  pic,
  setPic,
  setImgData,
  setPosition,
  position,
  password,
  setPassword,
}) {
  const picHendler = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImgData(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setPic(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const birthHendler = (e) => {
    setBirth(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: input,
        complete: false,
        id: Math.random() * 1000,
        pic: pic,
        birth: birth,
        email: email,
        gender: gender,
        position: position,
        password: password,
      },
    ]);
    setInput("");
    setPic("");
    setBirth("");
    setEmail("");
    setPassword("");
  };

  console.log(gender);

  return (
    <div className='form__container'>
      <h1>ADD TRAINEE</h1>
      <form className='form__input' >
        <label>Picture  </label>
        <input onChange={picHendler} type="file" />
        <br />
        <label>Name  </label>
        <input
        placeholder='firstname-lastname'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <br />
        <div className="form__date">

        <label>Date of birth  </label>
        <input value={birth} onChange={birthHendler} type="date" />
        </div>
       
        <label>Email  </label>
        <input
        placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <div className="form__gender">

        <label>Gender : </label>
    
        <input
          type="radio"
          checked={gender === "Male"}
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Male </label>
        <input
          type="radio"
          checked={gender === "Female"}
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Female </label>
        </div>
    
        <label >Position : </label>
        <select className='form__select' value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="FullStack">FullStack</option>
          <option value="Frontend-Developer">Frontend-Developer</option>
          <option value="Backend-Developer">Backend-Developer</option>
          <option value="Mobile-Developer">Mobile-Developer</option>
        </select>
        <br />
        <label>Set password for delete : </label>
        <input
        placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn__group">

        <div className="btn__submit">

        <button onClick={onSubmit}>Submit</button>
        </div>

        <div className="btn__clear">
        <button onClick={() => window.location.reload(true)}>Clear</button>

        </div>
        </div>

      </form>
    </div>
  );
}

export default Form;