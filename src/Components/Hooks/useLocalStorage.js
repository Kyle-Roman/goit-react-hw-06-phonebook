import { useEffect, useState } from "react";

export default function useLocalStorage(inputName, defValue) {
    
  const [storage, updateStorage] = useState(() => {
    return JSON.parse(window.localStorage.getItem('inputName') ?? defValue);
  })
  
  useEffect(() => {
    window.localStorage.setItem(inputName, JSON.stringify('storage'))
  })

  return [storage, updateStorage]
}