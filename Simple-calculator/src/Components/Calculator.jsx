import { useState, useEffect } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

 useEffect(()=>{
  alert("Hi welcome to your digital calculator")
 },[])



  useEffect(() => {
  
    if (result !== null) {
      console.log('Result changed:', result);
    }
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    
    if (num1 === '' || num2 === '') {
      setError('Please enter both numbers');
      setResult(null);
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }


    let calculationResult;
    switch (operation) {
      case 'add':
        calculationResult = number1 + number2;
        break;
      case 'subtract':
        calculationResult = number1 - number2;
        break;
      case 'multiply':
        calculationResult = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          setResult(null);
          return;
        }
        calculationResult = number1 / number2;
        break;
      default:
        calculationResult = null;
    }

    setResult(calculationResult);
  };

  const resetCalculator = () => {
    setNum1('');
    setNum2('');
    setOperation('add');
    setResult(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Simple Calculator</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="num1" className="block text-sm font-medium text-gray-700">
              First Number
            </label>
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Enter first number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="operation" className="block text-sm font-medium text-gray-700">
              Operation
            </label>
            <select
              id="operation"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="add">Add (+)</option>
              <option value="subtract">Subtract (−)</option>
              <option value="multiply">Multiply (×)</option>
              <option value="divide">Divide (÷)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="num2" className="block text-sm font-medium text-gray-700">
              Second Number
            </label>
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Enter second number"
            />
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={resetCalculator}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Reset
            </button>
          </div>
        </form>

        {(error || result !== null) && (
          <div className={`mt-6 p-4 rounded-lg ${error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
            <h2 className="text-lg font-semibold mb-1">
              {error ? 'Error' : 'Result'}
            </h2>
            <p className={error ? 'text-red-600' : 'text-green-600 font-bold text-xl'}>
              {error || `Result: ${result}`}
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Try different operations with any numbers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;