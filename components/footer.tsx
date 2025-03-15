export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            INNOV8
          </h2>
          <p className="text-gray-400 mt-1">Transforming ideas into reality</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Innov8 Team. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-1">Designed with passion for innovation</p>
        </div>
      </div>
    </footer>
  )
}

