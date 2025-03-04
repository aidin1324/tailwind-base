function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full transition-shadow hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <img 
            src="https://media.cnn.com/api/v1/images/stellar/prod/160725131446-graham-car-crash-evolved-human.jpeg?q=w_3762,h_2172,x_0,y_0,c_fill"
            alt="Алексей Иванов"
            className="w-20 h-20 rounded-full object-cover"
          />
          
          <div>
            <h2 className="text-xl font-bold text-gray-900">Алексей Иванов</h2>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
        </div>
        
        <p className="my-4 text-gray-700">
          Разрабатываю современные и удобные интерфейсы на React и TailwindCSS.
        </p>
        
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Add Friend
          </button>
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-50 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default App