import './App.css'

function App() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#333',
        fontSize: '2.5rem',
        marginBottom: '20px'
      }}>
        欢迎访问 efihu.com
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '10px'
      }}>
        网站部署成功！
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#999'
      }}>
        这是一个使用 React + Vite 构建的网站
      </p>
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <p>如果您能看到这个内容，说明React应用运行正常！</p>
      </div>
    </div>
  )
}

export default App
