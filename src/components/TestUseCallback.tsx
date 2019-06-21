/**
 * useCallback 记忆函数
 */
import React, { useCallback } from 'react'

// useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用

function TestUseCallback() {
  const memoryHandleClick = useCallback(() => {
    console.log('callback click happened')
  }, []) // 空数组代表无论什么情况下函数都不会法神改变
  return (
    <div>
      <button onClick={ memoryHandleClick }>Callback点击</button>
    </div>
  )
}

export default TestUseCallback