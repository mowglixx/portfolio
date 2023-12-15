
/**
 * useTimer, react timeout hook
 * @param {function} callbackFunction - function to run after the timeout
 * @param {number} milliseconds - Number of milliseconds before returning the function
 * @returns [number, NodeJS.Timeout]
 */
export const useTimer = (callbackFunction = () => { return; }, milliseconds = 0) => {
  const timer = setTimeout(callbackFunction, milliseconds)
  return [timer, () => clearTimeout(timer)]
}

export const useTimerLoop = (callbackFunction = () => {return;} )
