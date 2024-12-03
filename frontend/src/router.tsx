import { useEffect } from 'preact/hooks'
import { createBrowserRouter } from 'react-router-dom'

function GetUsers() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return <div>hlelo</div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <GetUsers />,
  },
])

export default router
