import React, { useCallback, useEffect, useRef, useState } from 'react';

function Password() {
  // Use const for state variables since they aren’t reassigned directly.
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);

  let passwordref = useRef(null);
  // Memoize the password generation function.
  const handleGenerate = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Append extra character sets if selected.
    if (includeNumber) charset += number;
    if (includeUppercase) charset += uppercase;

    let finalPassword = '';
    // Use zero-based loop and calculate the random index correctly.
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      finalPassword += charset[randomIndex];
    }
    setPassword(finalPassword);
    console.log(finalPassword);
  }, [length, includeNumber, includeUppercase]);

  const CopytoClipboard = () => {
    passwordref.current?.select();
    document.execCommand('copy'); //is deprecated, use navigator.clipboard.writeText instead.
    // window.navigator.clipboard.writeText(passwordref.current?.value); // Copy the password to clipboard
  }
  // Automatically generate a new password whenever dependencies change.
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="bg-zinc-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="flex gap-4 justify-center items-center">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordref}
            className="bg-white rounded-lg h-10 p-1 outline-none"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer"
            onClick={CopytoClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          {/* Ensure the range input shows the current length and convert string to number */}
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="cursor-pointer"
          />
          <span>{length}</span>
          {/* For checkboxes, use e.target.checked to get a boolean value */}
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={(e) => setIncludeNumber(e.target.checked)}
            />
            Number
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Uppercase
          </label>
        </div>
      </div>
    </div>
  );
}

export default Password;
