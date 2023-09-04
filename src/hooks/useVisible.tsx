import React, { useState, useEffect } from 'react'

const useVisible = (ref: React.RefObject<HTMLDivElement>) => {
  const [isVisble, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting)
      })

      observer.observe(ref.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [ref])

  return isVisble
}

export default useVisible
