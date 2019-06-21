import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'

function ChildInputComponent(props: any, ref: any) {
  const inputRef: any = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)
  return (
    <input type="text" name="child input" ref={inputRef} />
  )
}

const ChildInput = forwardRef(ChildInputComponent)

function TestUseImperativeHandle() {
  const inputRef: any = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  )
}

export default TestUseImperativeHandle