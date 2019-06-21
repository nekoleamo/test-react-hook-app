/**
 * useMemo 记忆组件
 */
import React, { useMemo } from 'react'

// useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件

function TestUseMemo() {
  const memoryHandleClick = useMemo(() => () => {
    console.log('memo click happened')
  }, []) // 空数组代表无论什么情况下函数都不会法神改变
  return (
    <div>
      <button onClick={ memoryHandleClick }>Memo点击</button>
    </div>
  )
}

export default TestUseMemo