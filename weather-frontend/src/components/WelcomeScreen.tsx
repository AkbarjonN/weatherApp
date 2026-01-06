const WelcomeScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-blue-900 bg-opacity-80 text-white z-10">
      <h1 className="text-5xl font-bold mb-6 animate-bounce">Weather App</h1>

      <p className="text-xl mb-10 animate-pulse">
        Search for a city to see the weather
      </p>

      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-100"/>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-200"/>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-300"/>
      </div>
    </div>
  );
};

export default WelcomeScreen;
